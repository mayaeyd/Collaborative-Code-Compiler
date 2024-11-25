<?php

namespace App\Http\Controllers;
use App\Models\Invitation;
use Illuminate\Http\Request;

class InvitationController extends Controller
{
    function invite(Request $request){
        $invitation = Invitation::create([
            "is_accepted"=> $request->is_accepted,
            "file_id"=> $request->file_id,
            "user_id"=> $request->user_id,
        ]);
        return response()->json([
            "message"=> "Invitation recorded successfully",
            "invitation"=> $invitation
        ], 201);
    }
}
