<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RequestCollab extends Mailable
{
    use Queueable, SerializesModels;
    public function __construct()
    {
        // pass data to the view
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('mayabaseleid@sandboxde0d6d5705d140fa8cdda3d3894194b3.mailgun.org', 'Maya Eid'),
            subject: 'Request Collaboration',
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.request-collab',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
