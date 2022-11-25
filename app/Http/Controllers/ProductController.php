<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Hashids\Hashids;
use Illuminate\Support\Str;
class ProductController extends Controller
{
    public function add(AddProductRequest $request){
        $product = new Product();
        $product->name = $request->name;
        $product->slug = Str::slug($request->name);
        $product->type = $request->type;
        $product->market()->associate(auth()->user()->market);
        $product->save();

        $product = Product::find(1);
        $hashids = new Hashids('almila',6,'abcdefghijklmnopqrstuvwxyz');
        $hash = $hashids->encode(auth()->user()->market->id,$product->id,$product->type);
        $product->hashid=$hash;
        $product->save();
        return $product;
    }
    public function show(Request $request){
        return Product::where('hashid',$request->hashid)->first();
    }
    public function getall(){
        return auth()->user()->market->productsWithDb;
    }
    public function get(Request $request){
      return Product::where('hashid',$request->hashid)->firstOrFail();
    }
}
