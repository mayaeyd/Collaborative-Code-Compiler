<?php

use App\Http\Controllers\OutputController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RequestCollabController;
use App\Http\Controllers\AuthController;

Route::post('/compiler', [OutputController::class, 'run_code']);
Route::post('/send-email', [RequestCollabController::class, 'sendEmail']);

Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']); 

    Route::middleware('auth:api')->group(function () {
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::post('me', [AuthController::class, 'me']);
        Route::post('logout', [AuthController::class, 'logout']);
    });
});

