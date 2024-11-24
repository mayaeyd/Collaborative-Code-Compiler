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

    function edit_file($id, Request $request) {

        $request->validate([
            'name' => 'required|string|max:255',
            'content' => 'required|string',
            'language' => 'required|string', 
        ]);

        $file = File::find($id)->update([
            'name'=>$request->name,
            'content'=>$request->content,
            'language'=>$request->language,
        ]);

        return response()->json([
            'message' => 'File edited successfully!',
        ], 201);
    }

    function delete_file($id, Request $request) {

        $file = File::find($id)->delete();

        return response()->json([
            'message' => 'File deleted successfully!'
        ], 201);
    }

    function get_files($id, Request $request) {

        $files = File::where('owner_id', $id)->get();

        return response()->json([
            'message' => 'Files fetched successfully!',
            'files'=> $files,
        ], 200);
    }
}
