<?php

use App\Http\Controllers\InvitationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileController;
use App\Http\Controllers\CollaborationController;


Route::prefix("/files")->group(function (){
    Route::get("/{id}", [FileController::class,"get_files"]);
    Route::post("/", [FileController::class, "create_file"]);
    Route::put("/{id}", [FileController::class, "edit_file"]);
    Route::delete("/{id}", [FileController::class, "delete_file"]);
});
Route::prefix("/collaborations")->group(function (){
    Route::post("/", [CollaborationController::class,"add_collaborator"]);
    Route::put("/{id}", [CollaborationController::class,"update_role"]);
});

Route::post("/invitations", [InvitationController::class,"invite"]);
