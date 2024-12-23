<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Collaboration Proposal</title>
</head>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #EDF2F7;
        margin: 0;
        padding: 0;
    }

    .email-container {
        width: 70%;
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-size: 24px;
        color: #333333;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
        color: #555555;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    .role-highlight {
        font-weight: bold;
        color: #1a73e8;
    }

    .button {
        display: inline-block;
        padding: 12px 20px;
        margin: 10px 5px;
        font-size: 16px;
        font-weight: bold;
        color: white;
        text-align: center;
        text-decoration: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .button-accept {
        background-color: #28a745;
    }

    .button-reject {
        background-color: #dc3545;
    }

    .footer {
        margin-top: 40px;
        font-size: 14px;
        color: #777777;
    }
</style>

<body>

    <div class="email-container">
        <h1>Collaboration Proposal</h1>

        <p>Hello,</p>

        <p>I hope you are well. I'm reaching out to explore the possibility of collaborating with you on an exciting
            opportunity.</p>

        @if ($role === 'editor')
            <p class="role-highlight">As an <strong>Editor</strong>, you will have the ability to make edits and contribute
                directly to the content we're working on.</p>
        @elseif ($role === 'viewer')
            <p class="role-highlight">As a <strong>Viewer</strong>, you will have access to review the content and provide
                your valuable feedback.</p>
        @endif

        <p>I believe our combined efforts could lead to great results, and I would love to discuss how we can work
            together.</p>

        <p>Please let me know if you're open to a conversation. Below are your options to accept or reject this
            collaboration:</p>

        <div style="text-align: center;">
            <a href="https://google.com" class="button button-accept">Accept Collaboration</a>
            <a href="https://google.com" class="button button-reject">Reject Collaboration</a>
        </div>

        <div class="footer">
            <p>Best regards,</p>
        </div>
    </div>

</body>

</html>