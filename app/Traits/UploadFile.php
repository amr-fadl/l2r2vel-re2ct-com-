<?php

namespace App\Traits;

use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

trait UploadFile
{

    private function handelImage($image,$path,$extension,$width=null,$height=null)
    {
        // handel size file
        [$widthDefault, $heightDefault] = getimagesize($image);
        $width = $width?? $widthDefault;
        $height = $height?? $heightDefault;

        $imgName = Str::uuid(). date('y-m-d').'.'.$extension;

        Image::make($image)
        ->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
        })->save(storage_path('app/public/images/'.$path.'/'.$imgName),100,$extension);

        return $imgName;
    }

    public function deleteFile($fileNames,$path)
    {
        if (is_array(json_decode($fileNames))) {
            foreach (json_decode($fileNames) as $name) {
                Storage::disk('public')->delete('images/'.$path.'/'.$name);
            }
        }else Storage::disk('public')->delete('images/'.$path.'/'.$fileNames);
    }

    public function uploadFile($files,$path='',$extension='webp',$width=null,$height=null){

        // chack my files is array
        if (is_array($files)) {

            $file_names = [];

            foreach ($files as $file) {
                $file_names[] = $this->handelImage($file,$path,$extension,$width,$height);
            }

            return json_encode($file_names);

        }else return $this->handelImage($files,$path,$extension,$width,$height);

    }

    public function updateFile($files,$oldName,$path='',$extension='webp',$width=null,$height=null){

        // delete old file
        $this->deleteFile($oldName,$path);

        // upload File
        return $this->uploadFile($files,$path,$extension,$width,$height);

    }
}
