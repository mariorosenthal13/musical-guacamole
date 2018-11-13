<?php

namespace App\Http\Controllers;
use Mail;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    public function send(Request $request){
        $name = $request->input('name');
        $email = $request->input('email');
        $content = $request->input('content');

        Mail::send('email.send', ['name' => $name, 'email' => $email, 'content' => $content], function ($message)
        {

            $message->from('mario.f.rosenthal@gmail.com', 'Strange People Website');

            $message->to('mario.f.rosenthal@gmail.com');
            $message->subject("bitch ass nigga");

        });

        return redirect('/')->with('message', 'Thank you for you message , you should hear back from us soon!');
    }
}
