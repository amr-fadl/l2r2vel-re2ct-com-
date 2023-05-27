<?php

namespace App\Models\Brand;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;
    protected $fillable = ['name','image'];

    // // categories
    // public function categories(){
    //     return $this->hasMany(Category::class);
    // }

    // products
    public function products(){
        return $this->hasMany(Product::class,'brand_id','id');
    }

}
