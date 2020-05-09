<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Le jeu du village</title>

        <link href="{{ asset('css/style.css') }}" rel="stylesheet">  
        <script src="{{ asset('js/app.js') }}" defer></script>
       
    </head>


    <body id="welcome-page">
        
        <div id="top-panel-title">
            <p id="txt-title-top-panel">Le Jeu du Village</p>
        </div>

        <div id="side-panel-welcome-page">
            <div id="side-panel-txt-top">
                <p>Outil d'aide à la gestion du rp Le jeu du village</p>
            </div>

            @guest
                <div id="side-panel-connect-button">
                    <a href="{{ url("login") }}">
                        <p id="side-panel-txt-connect"> Se Connecter</p>
                    </a>
                </div>
        
                <div id="side-panel-register-button">
                    <a href="{{ url("register") }}">
                        <p id="side-panel-txt-register"> S'inscrire</p>
                    </a>
                </div>
            @endguest

            <div id="side-panel-txt-bottom">
                <p>un soucis ? une question ? rejoignez le discord pour discuter avec les admins du site et les responsables du jeu </p>
            </div>

            <div id="discord-button">
                <a href="https://discord.gg/bNNfG5B">
                    <img src="{{asset('/image/discord_logo.png')}}" alt="discordlogo">
                </a>
            </div>

        </div>

        <div id="main-page-div">
            <div id="text-area-main-page">
                <p class="text-area-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris.
                </p>
                <p class="text-area-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris.
                </p>
                <p class="text-area-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris.
                </p>
                <p class="text-area-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris.
                </p>
                <p class="text-area-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris.
                </p>
                <p class="text-area-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris.
                </p>
                <p class="text-area-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris.
                </p>
                <p class="text-area-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, lectus id consequat lobortis, lorem ipsum dignissim justo, ultricies eleifend purus arcu nec ligula. Duis lacinia suscipit pulvinar. Etiam aliquam gravida magna eu varius. Maecenas nec justo erat. Nulla nec purus quis augue auctor ultrices. Sed ut dolor eget tortor dapibus finibus. In luctus tincidunt lectus, ac facilisis mi ultricies eu. In in lacinia risus, vel blandit odio. Phasellus ullamcorper ex nunc, id consectetur metus condimentum et. Proin metus leo, maximus a egestas in, lobortis sed mauris.
                </p>
            </div>
        </div>

    </body>
</html>