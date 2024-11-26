<?php

use App\Http\Controllers\OutputController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RequestCollabController;

Route::post('/compiler', [OutputController::class, 'run_code']);
Route::post('/send-email', [RequestCollabController::class, 'sendEmail']);

