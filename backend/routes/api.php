<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::prefix("/files")->group(function (){
    Route::get("/{id}", [FileController::class,"get_files"]);
    Route::post("/", [FileController::class, "create_file"]);
    Route::put("/{id}", [FileController::class, "edit_file"]);
    Route::delete("/{id}", [FileController::class, "delete_file"]);
});