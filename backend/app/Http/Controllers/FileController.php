<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;

class FileController extends Controller
{
    
    function create_file(Request $request) {

        $request->validate([
            'name' => 'required|string|max:255',
            'content' => 'required|string',
            'language' => 'required|string', 
            'owner_id' => 'required|exists:users,id',
        ]);

        $user = File::create([
            'name'=>$request->name,
            'content'=>$request->content,
            'language'=>$request->language,
            'owner_id'=>$request->owner_id,
        ]);

        return response()->json([
            'message' => 'File created successfully!'
        ], 201);
    }
}
