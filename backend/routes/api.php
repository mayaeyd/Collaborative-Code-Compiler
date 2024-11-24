<?php

use App\Http\Controllers\OutputController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/compiler',[OutputController::class,'run_code']);
