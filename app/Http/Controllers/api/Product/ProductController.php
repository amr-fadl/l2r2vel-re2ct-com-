<?php

namespace App\Http\Controllers\api\Product;

use App\Models\Brand\Brand;
use Illuminate\Http\Request;
use App\Models\Product\Product;
use App\Models\ProductCategory;
use App\Models\Category\Category;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Traits\ImageUrl;
use App\Traits\UploadFile;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Schema;
use PhpParser\Node\Stmt\Switch_;

class ProductController extends Controller
{

    use UploadFile;
    use ImageUrl;

    /**
     * Display a listing of the resource.
     */

    public function index(Request $request)
    {
        if ($request->page) {

            $products = Product::latest()->paginate(10,['*'],'page',$request->page);

            foreach ($products as $product) {
                $product->images = $this->createImageUrl($product->images,'product');
            }

            return $products;

        }elseif($request->category){
            $products = Product::where('category', $request->category)->get();

            foreach ($products as $product) {
                $product->images = $this->createImageUrl($product->images,'product');
            }

            return $products;

        }
        return Product::all();
    }

    public function moreSales()
    {
        $data = Product::orderBy('sales_count', 'desc')->take(10)->get();

        foreach ($data as $product) {
            $product->images = $this->createImageUrl($product->images,'product');
        }

        return $data;
    }

    public function latestProducts()
    {
        $data = Product::latest()->take(10)->get();

        foreach ($data as $product) {
            $product->images = $this->createImageUrl($product->images,'product');
        }

        return $data;
    }

    // public function search(Request $request)
    // {
    //     $query = Product::query();
    //     $columns = Schema::getColumnListing('products');

    //     // تصفية حسب الفئات
    //     if ($request->has('categories')) {
    //         $categories = $request->categories;
    //         $query->whereIn('id', function($query) use ($categories) {
    //             $query->select('product_id')
    //                 ->from('product_categories')
    //                 ->whereIn('category_id', $categories);
    //         });
    //     }

    //     // تصفية حسب الماركات
    //     if ($request->has('brands')) {
    //         $brands = $request->brands;
    //         $query->whereIn('brand', $brands);
    //     }

    //     // تصفية حسب السعر
    //     if ($request->has('price_from')) {
    //         $query->where('price', '>=', $request->price_from);
    //     }

    //     if ($request->has('price_to')) {
    //         $query->where('price', '<=', $request->price_to);
    //     }

    //     // تصفية حسب البحث
    //     if ($request->has('search')) {
    //         foreach ($columns as $column) {
    //             if ($column != 'created_at' && $column != 'updated_at') {
    //                 if ($query->getQuery()->wheres == null) {
    //                     $query->where($column, 'like', '%' . $request->search . '%');
    //                 } else {
    //                     $query->orWhere($column, 'like', '%' . $request->search . '%');
    //                 }
    //             }
    //         }
    //     }

    //     // sort data
    //     $products = $query->when($request->sort_data, function ($query, $sort_data) {
    //         switch ($sort_data) {
    //             case 'price':
    //                 return $query->orderBy('price');
    //                 break;

    //             case '-price':
    //                 return $query->orderByDesc('price');
    //                 break;

    //             case 'sales':
    //                 return $query->orderByDesc('sales_count');
    //                 break;

    //             case 'rating':
    //                 return $query->orderByDesc('ratings_qty');
    //                 break;

    //             default:
    //                 return $query;
    //                 break;
    //         }
    //     })->paginate(10,['*'],'page',$request->page??1);

    //     return response()->json($products);
    // }

    public function search(Request $request)
    {
        $query = Product::query();
        $columns = Schema::getColumnListing('products');

        // تصفية حسب الفئات
        if ($request->has('categories')) {
            $categories = $request->categories;
            $query->whereHas('categories', function ($query) use ($categories) {
                $query->whereIn('id', $categories);
            });
        }

        // تصفية حسب الماركات
        if ($request->has('brands')) {
            $brands = $request->brands;
            $query->whereIn('brand_id', $brands);
        }

        // تصفية حسب السعر
        if ($request->has('price_from')) {
            $query->where('price', '>=', $request->price_from);
        }

        if ($request->has('price_to')) {
            $query->where('price', '<=', $request->price_to);
        }

        // تصفية حسب البحث
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search, $columns) {
                foreach ($columns as $column) {
                    if ($column!= 'created_at' && $column!= 'updated_at') {
                        $query->orWhere($column, 'like', '%'. $search. '%');
                    }
                }
            });
        }

        // sort data
        $products = $query->when($request->sort_data, function ($query, $sort_data) {
            switch ($sort_data) {
                case 'price':
                    return $query->orderBy('price');
                    break;

                case '-price':
                    return $query->orderByDesc('price');
                    break;

                case 'ales':
                    return $query->orderByDesc('sales_count');
                    break;

                case 'rating':
                    return $query->orderByDesc('ratings_qty');
                    break;

                default:
                    return $query;
                    break;
            }
        })->paginate(10,['*'],'page',$request->page??1);

        foreach ($products as $product) {
            $product->images = $this->createImageUrl($product->images,'product');
        }

        return $products;


    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {

        // validate
        $request->validate([
            'name' => ['required', 'string', 'max:50'],
            'images' => ['required'],
            'images.*' => ['mimes:jpg,jpeg,bmp,png,webp'],
            'price' => 'required',
            'desc' => 'required',
            'category' => 'required',
        ]);

        // except data
        $request_data = $request->except('category','_token','timestamp');

        // // save images
        if ($request->file('images'))
        {
            $request_data['images'] = $this->uploadFile($request->file('images'),'product','webp',300);
        }

        // price after
        if ($request->discount)
        $request_data['price_after'] = round($request->price - ($request->price * $request->discount / 100));

        // handel colors
        if ($request->colors)
        $request_data['colors'] = json_encode($request->colors);

        // create my Product
        $prod = Product::create($request_data);

        // create sub product
        if ($request->category) {
            foreach ($request->category as $value) {
                $prod->categories()->attach($value);
            };
        }

        return response()->json(["message"=>'product add success']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        // create url
        $product->images = $this->createImageUrl($product->images,'product');
        return $product;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        // validate
        $request->validate([
            'name' => ['required', 'string', 'max:50'],
            'images' => ['required'],
            'images.*' => ['mimes:jpg,jpeg,bmp,png,webp'],
            'price' => 'required',
            'desc' => 'required',
            'category' => 'required',
        ]);

        // except data
        $request_data = $request->except('category','_token','timestamp');

        // // save images
        if ($request->file('images'))
        {
            $request_data['images'] = $this->updateFile($request->file('images'),$product->images,'product','webp',300);
        }

        // price after
        if ($request->discount)
        $request_data['price_after'] = round($request->price - ($request->price * $request->discount / 100));

        // handel colors
        if ($request->colors)
        $request_data['colors'] = json_encode($request->colors);

        // update my Product
        $product->update($request_data);

        // update sub product
        if ($request->category && count($request->category) > 0) {
            $product->categories()->sync($request->category);
        } else {
            $product->categories()->detach();
        }

        return response()->json(["message"=>'product add success']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $this->deleteFile($product->images,'product');
        $product->delete();
        return response()->json(["message"=>'product delete success']);
    }
}
