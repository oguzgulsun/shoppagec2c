<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // public function itemType()
    // {
    //     return $this->hasOne(ItemType::class, 'type' );
    // }
    // public function market()
    // {
    //     return $this->hasOne(Market::class, 'market_id');
    // }

    public function market()
    {
        return $this->belongsTo(Market::class);
    }
}
