<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function register(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|max:255|email|unique:users,email',
        'password' => 'required|string|min:6|confirmed',
    ]);

    // Create a new user in the database
    $user = User::create([
        'name' => $validatedData['name'],
        'email' => $validatedData['email'],
        'password' => bcrypt($validatedData['password']),
    ]);

    // Generate a JWT token for the newly registered user
    $token = JWTAuth::fromUser($user);

    // Return the token and user info
    return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
    ]);
}

    
}
