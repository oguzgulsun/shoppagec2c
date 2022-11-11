<?php

namespace App\Http\Controllers;

use App\Models\AccountActivity;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;

class ProfileController extends Controller
{
    public function uploadavatar(Request $request){
       
        $image = $request->image;  // your base64 encoded
        $image = str_replace('data:image/png;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $imageName = "avatar".time().'.'.'png';;
   
        File::put(public_path().'/avatars/'.$imageName, base64_decode($image));
   
        $authuser = Auth::user();

        $user = User::find($authuser->id);
        $user->profile_photo_path = "/avatars/".$imageName;
        $user->save();

        return  "/avatars/".$imageName;

    }
    public function getaccountactivities(){
        $user = Auth::user();
       return AccountActivity::where('user_id',$user->id)->orderByDesc('id')->limit(5)->get();
    }

    public function changeuserpassword(Request $request){
        //deneme
        $authuser = Auth::user();
        $user = DB::table('users')->where('id',$authuser->id)->get();
        $currenthashedpassword = $user[0]->password;
        $istrue= Hash::check($request->currentpassword, $currenthashedpassword);
        if($istrue == false){
            return ['status'=>3];
        }else{
            if($request->newpassword!=$request->newpasswordconfirm){
                return ['status'=>2];
            }
            else{
                $newpass = Hash::make($request->newpassword);
                $user = User::find($authuser->id);
                $user->password = $newpass;
                $user->save();
                $activity = new AccountActivity();
                $activity->systime = date('Y-m-d H:i:s');
                $activity->type=3;
                $activity->user()->associate($user);
                $activity->save();
                return ['status'=>1];
            }
        }
        
    }
}
