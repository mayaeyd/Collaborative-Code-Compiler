<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmailController;
use App\Mail\RequestCollab;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/send-test-email', function () {
    Mail::to('mayabaseleid@gmail.com')->send(new RequestCollab());
    return 'Test email sent!';
});