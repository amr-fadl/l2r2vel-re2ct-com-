<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {{-- <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Montserrat:wght@600;700&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/6f903c4069.js" crossorigin="anonymous"></script> --}}

        <title>متجر الكتروني</title>

        <title>Laravel 9 vite with react</title>

        @viteReactRefresh
        @vite('resources/css/app.css')
        @vite('resources/js/index.jsx')
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
