<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index(){
        $user = auth()->user();
        return view('app')->with('user',$user);
    }
}
