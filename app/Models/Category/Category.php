<?php

namespace App\Models\Category;

use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['name','parent_cat_id','image'];

    // brand
    public function brand(){
        return $this->belongsTo(Brand::class);
    }

    // products
    public function products(){
        return $this->belongsToMany(Product::class,'product_categories');
    }

    // sub categories
    public function child(){
        return $this->hasMany(Category::class , 'parent_cat_id' , 'id');
    }

    // parent categories
    public function parent(){
        return $this->belongsTo(Category::class , 'parent_cat_id' , 'id');
    }
}
