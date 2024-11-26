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

    // Login user
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function me()
{
    $user = auth('api')->user();

    if ($user) {
        return response()->json($user);
    } else {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
}


   // Logout user
public function logout()
{
    // Get the current token
    $token = JWTAuth::getToken();

    // If the token is valid, invalidate it
    if ($token) {
        JWTAuth::invalidate($token);
        return response()->json(['message' => 'Successfully logged out']);
    }

    // If no token is provided, return an error
    return response()->json(['error' => 'No token provided'], 400);
}


    public function refresh()
{
    try {
        // Get the current JWT token from the request
        $token = JWTAuth::getToken();

        // If the token exists, refresh it and return the new token
        if ($token) {
            $newToken = JWTAuth::refresh($token);
            return $this->respondWithToken($newToken);
        }

        return response()->json(['error' => 'Token not provided'], 400);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Failed to refresh token'], 500);
    }
}



    // Return JWT token response
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60
        ]);
    }
}
