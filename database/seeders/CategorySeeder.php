<?php

namespace Database\Seeders;

use App\Models\Category\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'ملابس',
                'image' => '6430abbaaa750prod4.png',],
            ['name' => 'ملابس رجالي',
                'parent_cat_id' => '1',
                'image' => '6430abbaaa750prod4.png',],
            ['name' => 'ملابس نسائية',
                'parent_cat_id' => '1',
                'image' => '6430ac2d2f84barrival1.png',
            ],
            ['name' => 'ملابس اطفال',
                'parent_cat_id' => '1',
                'image' => '6430ac53c33f9arrival4.png',],
            ['name' => 'اجهزة الكترونية',
                'image' => '6430ad6b3b055download.png',],
            ['name' => 'موبيلات',
                'parent_cat_id' => '5',
                'image' => '6430ad82b11b6mobile1.png',],
            ['name' => 'لابتوب',
                'parent_cat_id' => '5',
                'image' => '6430ad9394ebclabtop.png',],
            ['name' => 'سماعات',
                'parent_cat_id' => '5',
                'image' => '6430adc0158dditem.png',],
        ];

        foreach ($data as $key => $value) {
            Category::create([
                'name' => $value['name'],
                'parent_cat_id' => $value['parent_cat_id']??null,
                'image' => $value['image']
            ]);
        }
    }
}
