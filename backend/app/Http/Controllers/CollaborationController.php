<?php

namespace App\Http\Controllers;
use App\Models\Collaboration;
use Illuminate\Http\Request;

class CollaborationController extends Controller
{
    function add_collaborator(Request $request){
        $validatedData = $request->validate([
            'role' => 'required|string|max:255', 
            'collaborator_id' => 'required|integer|exists:users,id', 
            'file_id' => 'required|integer|exists:files,id', 
        ]);
        
        $collaborator = Collaboration::create($validatedData);

        return response()->json([
            "message"=> "Collaborator added successfully",
            "collaborator"=> $collaborator,
        ], 201);
    }
}
