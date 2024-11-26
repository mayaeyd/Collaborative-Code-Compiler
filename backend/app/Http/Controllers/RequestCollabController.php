<?php

namespace App\Http\Controllers;

use App\Mail\RequestCollab;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class RequestCollabController extends Controller
{
    public function sendEmail(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'role' => 'required|in:editor,viewer',
        ]);

        Mail::to($validated['email'])->send(new RequestCollab($validated['role']));

        return response()->json(['message' => 'Email sent!']);
    }
}
