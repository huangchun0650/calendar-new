<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Schedule extends Model
{
    use HasFactory, Searchable;

    /**
     * 取得模型可被索引資料的陣列。
     *
     * @return array
     */
    // public function toSearchableArray()
    // {
    //     // 自訂陣列...
    //     $array = []

    //     return $array;
    // }
}
