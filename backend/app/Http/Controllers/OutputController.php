<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OutputController extends Controller
{
    function run_code(Request $request){
        $validated = $request->validate([
            'language' => 'required|string',
            'version'=> 'required|string',
            'content'=> 'required|string',
        ]);

        $response = Http::withHeaders([
            'Content-Type'=> 'application/json',
        ])->post('https://emkc.org/api/v2/piston/execute', [
            'language'=> $validated['language'],
            'version'=> $validated['version'],
            'files'=>[
                [
                    'content'=> $validated['content'],
                ]
            ]
        ]);

        if($response->failed()){
            return response()->json(['error' => 'API call failed'], 500);
        }
        return $response->json();
    }
}
