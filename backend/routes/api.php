<?php
use App\Http\Controllers\InvitationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileController;
use App\Http\Controllers\CollaborationController;
use App\Http\Controllers\RequestCollabController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OutputController;
use App\Http\Controllers\AIController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix("/files")->group(function (){
    Route::get("/{id}", [FileController::class,"get_files"]);
    Route::post("/", [FileController::class, "create_file"]);
    Route::put("/{id}", [FileController::class, "edit_file"]);
    Route::delete("/{id}", [FileController::class, "delete_file"]);
});
Route::prefix("/collaborations")->group(function (){
    Route::post("/", [CollaborationController::class,"add_collaborator"]);
    Route::put("/{id}", [CollaborationController::class,"update_role"]);
    Route::delete("/{id}", [CollaborationController::class,"remove_collaborator"]);
});

Route::post("/invitations", [InvitationController::class,"invite"]);

Route::post('/compiler', [OutputController::class, 'run_code']);
Route::post('/send-email', [RequestCollabController::class, 'send_email']);
Route::post('/analyze-code', [AIController::class, 'analyze_code']);


Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']); 

    Route::middleware('auth:api')->group(function () {
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::post('me', [AuthController::class, 'me']);
        Route::post('logout', [AuthController::class, 'logout']);
    });
});

