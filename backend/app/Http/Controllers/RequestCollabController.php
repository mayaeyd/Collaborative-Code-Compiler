<?php

namespace App\Http\Controllers;

use App\Mail\RequestCollab;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class RequestCollabController extends Controller
{
    public function sendTestEmail(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
        ]);

        Mail::to($validated['email'])->send(new RequestCollab());

        return response()->json(['message' => 'Test email sent!']);
    }
}
