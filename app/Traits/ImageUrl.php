<?php

namespace App\Traits;

trait ImageUrl {
    public function createImageUrl($name,$path){

        if (json_decode($name) > 0) {
            $data = [];
            foreach (json_decode($name) as $value) {
               $data[] = asset("/storage/images/$path/".$value);
            }
            return $data;
        }else{
            return asset("/storage/images/$path/".$name);
        }
    }

    public function createMultiImagesUrl($request,$path){
        foreach ($request as $singl) {
            if (json_decode($singl->images) > 0) {
                foreach (json_decode($singl->images) as $value) {
                    $singl->images = asset("/storage/images/$path/".$value);
                }
            }else $singl->image = asset("/storage/images/$path/".$singl->image);
        }

        return $request;
    }
}
