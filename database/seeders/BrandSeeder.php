<?php

namespace Database\Seeders;

use App\Models\Brand\Brand;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Brand::create([
            'name' => 'Brand 1',
            'image' => 'brand1.jpg'
        ]);

        Brand::create([
            'name' => 'Brand 2',
            'image' => 'brand2.jpg'
        ]);

    }
}
