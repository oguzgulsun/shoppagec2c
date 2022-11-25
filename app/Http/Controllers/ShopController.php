<?php

namespace App\Http\Controllers;

use App\Models\Market;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class ShopController extends Controller
{
   public function openmarket(Request $request){
        $market = Market::where('name',$request->name)->first();
        $marketslug = Market::where('slug', Str::slug($request->name))->first();

        if($market!=null||$marketslug!=null){
            return "exist";
        }
        $newMarket = new Market();
        $newMarket->name = $request->name;
        $newMarket->slug = Str::slug($request->name);
        $newMarket->user()->associate(auth()->user());
        $newMarket->save();
        return $newMarket;
   }
}
