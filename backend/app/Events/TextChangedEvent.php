<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TextChangedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $text;
    public function __construct($text)
    {
        $this->text = $text;
        // logger('TextChangedEvent fired with text:', ['text' => $text]);
    }

   
    public function broadcastOn(): array
    {
        return [
            new Channel('text-updates'),
        ];
    }

    // public function broadcastWith(): array
    // {
    //     return [
    //         new Channel('text-updates'),
    //     ];
    // }
}
