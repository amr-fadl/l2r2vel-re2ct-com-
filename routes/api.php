<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\Brand\BrandController;
use App\Http\Controllers\api\Product\ProductController;
use App\Http\Controllers\api\Category\CategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// category
Route::apiResource('category', CategoryController::class);

// product
Route::get('product/search', [ProductController::class,'search'])->name('product.search');
Route::get('product/more-sales', [ProductController::class,'moreSales'])->name('product.more-sales');
Route::get('product/latest', [ProductController::class,'latestProducts'])->name('product.latest');
Route::apiResource('product', ProductController::class);

// Route::group(['prefix' => 'products'], function () {
    // });

    // brand
Route::apiResource('brand', BrandController::class);
