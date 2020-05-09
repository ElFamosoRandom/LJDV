<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Le jeu du village</title>

        <link href="{{ asset('css/style.css') }}" rel="stylesheet">  
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <script src="{{ asset('js/app.js') }}" defer></script>
       
    </head>


    <body id="welcome-page">
        <div id="background-mask">
            <section id="main-content">
                @yield('content')
            </section>
        </div>
    </body>
</html>