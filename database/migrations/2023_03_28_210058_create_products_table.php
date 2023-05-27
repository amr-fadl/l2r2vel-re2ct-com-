<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->text('images')->nullable();
            $table->string('name');
            $table->text('desc');
            $table->decimal('price', 8, 2);
            $table->decimal('discount', 8, 2)->nullable();
            $table->decimal('price_after', 8, 2)->nullable();
            $table->string('sales_count')->default(0);
            $table->string('ratings_qty')->default(0);
            $table->string('qty');
            $table->foreignId('brand_id')->nullable()->constrained('brands','id');
            $table->string('colors')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
