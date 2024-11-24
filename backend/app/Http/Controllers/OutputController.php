<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OutputController extends Controller
{
    function run_code(Request $request){
        $validated = $request->validate([
            'language' => 'required|string',
            'verison'=> 'required|string',
            'content'=> 'required|string',
        ]);

    }
}
