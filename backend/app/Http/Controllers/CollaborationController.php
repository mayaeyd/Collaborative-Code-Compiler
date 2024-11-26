<?php

namespace App\Http\Controllers;
use App\Models\Collaboration;
use Illuminate\Http\Request;

class CollaborationController extends Controller
{
    function add_collaborator(Request $request){
        $request->validate([
            'role' => 'required|string|max:255', 
            'collaborator_id' => 'required|integer|exists:users,id', 
            'file_id' => 'required|integer|exists:files,id', 
        ]);
        
        $collaborator = Collaboration::create([
            "role"=> $request->role,
            "collaborator_id"=> $request->collaborator_id,
            "file_id"=> $request->file_id,
        ]);

        return response()->json([
            "message"=> "Collaborator added successfully",
            "collaborator"=> $collaborator,
        ], 201);
    }

    function update_role($id, Request $request){
        $validatedData = $request->validate([
            'role' => 'required|string|max:255', 
            'collaborator_id' => 'required|integer|exists:users,id', 
            'file_id' => 'required|integer|exists:files,id', 
        ]);

        $collaborator = Collaboration::find($id)->update(["role"=> $validatedData["role"]]);

        return response()->json([
            "message"=> "Changed Collaborator role",
            "collaborator"=> $collaborator,
        ], 200);

    }

    function remove_collaborator($id){
        $collaborator = Collaboration::find($id)->delete();

        return response()->json([
            'message' => 'Collaborator removed successfully!'
        ], 201);
    }
}
