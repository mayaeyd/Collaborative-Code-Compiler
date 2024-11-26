<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AIController extends Controller
{
    function analyze_code(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string',
        ]);

        $response = Http::post(
            'https://api.openai.com/v1/chat/completions',
            [
                "model" => "gpt-3.5-turbo",
                "messages" => [
                    [
                        "role" => "system",
                        "content" => "You are a code analyzer skilled in identifying errors in code and providing actionable suggestions for resolving them. Your response should be an object containing two keys: 'line', indicating the line number where the error occurs, and 'suggestion', providing a recommended fix for the error."
                    ],
                    [
                        "role" => "user",
                        "content" => $validated['code']
                    ]
                ]
            ]
        );

        if ($response->failed()) {
            return response()->json(['error' => 'API call failed'], 500);
        }
        return $response->json();
    }
}
