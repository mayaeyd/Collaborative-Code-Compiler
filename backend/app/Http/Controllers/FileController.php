<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;
use Tymon\JWTAuth\Facades\JWTAuth;

class FileController extends Controller
{
    function create_file(Request $request) {

        $request->validate([
            'name' => 'required|string|max:255',
            'content' => 'required|string',
            'language' => 'required|string', 
        ]);

        $user = JWTAuth::parseToken()->authenticate();

        $file = File::create([
            'name' => $request->name,
            'content' => $request->content,
            'language' => $request->language,
            'owner_id' => $user->id,  
        ]);

        return response()->json([
            'message' => 'File created successfully!',
        ], 201);
    }

    function edit_file($id, Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'content' => 'required|string',
            'language' => 'required|string',
        ]);

        $user = JWTAuth::parseToken()->authenticate();

        $file = File::findOrFail($id);

        if ($file->owner_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $file->update([
            'name' => $request->name,
            'content' => $request->content,
            'language' => $request->language,
        ]);

        return response()->json([
            'message' => 'File edited successfully!',
        ], 200);
    }

    function delete_file($id, Request $request) {
        $user = JWTAuth::parseToken()->authenticate();

        $file = File::findOrFail($id);

        if ($file->owner_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Delete the file
        $file->delete();

        return response()->json([
            'message' => 'File deleted successfully!'
        ], 200);
    }

    function get_files(Request $request) {
        $user = JWTAuth::parseToken()->authenticate();

    }
}