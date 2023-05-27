<?php

namespace App\Http\Controllers\api\Brand;

use App\Models\Brand\Brand;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageUrl;
use App\Traits\UploadFile;
use Intervention\Image\Facades\Image;

class BrandController extends Controller
{

    use UploadFile;
    use ImageUrl;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $data = Brand::paginate(10,['*'],'page',$request->page??1);
        foreach ($data as $d) {
            $d->image = $this->createImageUrl($d->image,'brand');
        }
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:50'],
            'image' => ['mimes:jpg,jpeg,bmp,png']
        ]);

        $request_data = $request->only('name');

        if ($request->file('image'))
        {
            $request_data['image'] = $this->uploadFile($request->file('image'),'brand','webp',200);
        }

        Brand::create($request_data);

        return response()->json(["message"=>'brand add success']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Brand $brand)
    {
        return Brand::find($brand);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:50'],
            'image' => ['mimes:jpg,jpeg,bmp,png']
        ]);

        $request_data = $request->only('name');

        if ($request->file('image'))
        {
            $request_data['image'] = $this->updateFile($request->file('image'),$brand->image,'brand');
        }

        $brand->update($request_data);

        return response()->json(["message"=>'brand update success']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand)
    {
        $this->deleteFile($brand->image,'brand');
        $brand->delete();
        return response()->json(["message"=>'brand delete success']);
    }
}
