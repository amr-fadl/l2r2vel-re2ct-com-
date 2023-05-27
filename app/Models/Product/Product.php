<?php

namespace App\Models\Product;

use App\Models\Brand\Brand;
use App\Models\Category\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['images','name','desc','price','discount','price_after','category','qty','brand_id','colors'];

    protected $with = ['categories','brand'];

    public function categories(){
        return $this->belongsToMany(Category::class,'product_categories');
    }

    public function brand(){
        return $this->belongsTo(Brand::class,'brand_id','id');
    }

    // public function users() {
        //     return $this->belongsToMany(User::class, 'product_user' , 'Product_id' , 'user_id' , 'id' , 'id');
        // }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($product) {
            $product->categories()->detach();
        });
    }
}
