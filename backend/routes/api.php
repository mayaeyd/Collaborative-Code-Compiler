<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RequestCollabController;
use App\Mail\RequestCollab;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/send-test-email', [RequestCollabController::class, 'sendTestEmail']);

