<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function up()
{
    Schema::create('categories', static function (Blueprint $table): void {
        $table->id();
 
        $table->string('name');
        $table->string('slug')->unique();
 
        $table->boolean('searchable')->default(true);
 
        $table->timestamps();
    });
}
}
