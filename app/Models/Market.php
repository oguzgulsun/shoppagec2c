<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Market extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function productsWithDb()
    {
        return $this->hasMany(Product::class, 'market_id' );
    }
}
