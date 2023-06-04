<?php

namespace App\Http\Controllers\api\Category;

use App\Traits\UploadFile;
use Illuminate\Http\Request;
use App\Models\Category\Category;
use App\Http\Controllers\Controller;
use App\Traits\ImageUrl;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{

    use UploadFile;
    use ImageUrl;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        if ($request->page) {
            $categories = Category::latest()->paginate(9,['*'],'page',$request->page);
            $categories->load('parent', 'child');

            foreach ($categories as $category) {
                $category->image = $this->createImageUrl($category->image,'category');
            }

            return $categories;
        }

        $categories = Category::all();
        $categories->load('parent', 'child');

        foreach ($categories as $category) {
            $category->image = $this->createImageUrl($category->image,'category');
        }

        return $categories;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:50'],
            'image' => ['required'],
            'image.*' => ['mimes:jpg,jpeg,bmp,png,webp'],
        ]);

        $request_data = $request->only('name','parent_cat_id');

        if ($request->file('image'))
        {
            $request_data['image'] = $this->uploadFile($request->file('image'),'category','webp',200);
        }

        Category::create($request_data);

        return response()->json(["message"=>'category add success']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        $category->image = $this->createImageUrl($category->image,'category');
        $category->load('parent', 'child');
        return $category;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {

        $request->validate([
            'name' => ['string','max:50'],
            'image.*' => ['mimes:jpg,jpeg,bmp,png,webp'],
        ]);

        $request_data = $request->only('name','parent_cat_id');

        if ($request->file('image'))
        {
            $request_data['image'] = $this->updateFile($request->file('image'),$category->image,'category');
        }

        // return $request_data;

        $category->update($request_data);

        return response()->json(["message"=>'category update success']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $this->deleteFile($category->image,'category');
        $category->delete();
        return response()->json(["message"=>'category delete success']);
    }
}
