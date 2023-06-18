<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tipo_usuario = $_POST["tipo-usuario"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "tu_correo@ejemplo.com";
    $subject = "Nuevo mensaje del formulario de contacto";
    $body = "Tipo de usuario: " . $tipo_usuario . "\n" .
        "Email: " . $email . "\n" .
        "Mensaje: " . $message;

    $headers = "From: tu_correo@ejemplo.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.";
    } else {
        echo "Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.";
    }
}
