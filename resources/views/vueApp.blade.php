<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="https://cdn.iconscout.com/icon/free/png-512/vue-282497.png">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div class="container">
        <h3>Vue.js CRUD with laravel 5.6 aplication</h3>
    </div>
    <section id="app">

    </section>
    <script>
        window.laravel = <?php 
            echo json_encode([
                'csrfToken' => csrf_token(),
            ])
        ?>
    </script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>