<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AIController extends Controller
{
    function analyze_code(Request $request)
    {
        $validated = $request->validate([
            'error' => 'required|string|max:1000', 
        ]);

        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('OPENAI_SECRET'),
                'Content-Type' => 'application/json',
            ])->post('https://api.openai.com/v1/chat/completions', [
                        "model" => "gpt-3.5-turbo",
                        "messages" => [
                            [
                                "role" => "system",
                                "content" => "You are a code analyzer skilled in identifying errors in code and providing actionable suggestions for 
                                            resolving them. Your response should be an object containing two keys: 'line', indicating the line number where the error 
                                            occurs, and 'suggestion', providing a recommended fix for the error, suitable for display in a popup."
                            ],
                            [
                                "role" => "user",
                                "content" => $validated['error']
                            ]
                        ]
                    ]);

            if ($response->failed()) {
                echo 'API call failed' . $response->body();
                return response()->json(['error' => 'API call failed'], $response->status());
            }

            return response()->json($response->json(), 200);

        } catch (\Exception $e) {
            echo 'Unexpected error in analyze_code' . $e->getMessage();

            return response()->json(['error' => 'Internal server error'], 500);
        }
    }
}
