<?php
declare(strict_types=1);

$recipient = 'simonwafula@outlook.com';
$site = 'simonwekesa.co.ke';

function redirect_with_status(string $status): void
{
    header('Location: /?contact=' . rawurlencode($status) . '#contact', true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_with_status('invalid');
}

if (!empty($_POST['website'] ?? '')) {
    redirect_with_status('sent');
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$subject = trim((string)($_POST['subject'] ?? 'Website message'));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_with_status('invalid');
}

$safeName = str_replace(["\r", "\n"], ' ', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$safeSubject = str_replace(["\r", "\n"], ' ', $subject);

$body = "Name: {$safeName}\n";
$body .= "Email: {$safeEmail}\n";
$body .= "Source: {$site}\n\n";
$body .= $message;

$headers = [
    'From: Simon Wekesa Website <no-reply@' . $site . '>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($recipient, $safeSubject, $body, implode("\r\n", $headers));

redirect_with_status($sent ? 'sent' : 'error');
