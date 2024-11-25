<?php

return [

    'default' => env('MAIL_MAILER', 'mailgun'),

    'mailers' => [
        'mailgun' => [
            'transport' => 'mailgun',
            'domain' => env('MAILGUN_DOMAIN'),
            'secret' => env('MAILGUN_SECRET'),
            'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        ],
    ],

    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'mayaeid@sandboxde0d6d5705d140fa8cdda3d3894194b3.mailgun.org'),
        'name' => env('MAIL_FROM_NAME', 'Maya Eid'),
    ],

];
