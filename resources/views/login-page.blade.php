
@extends('layouts.layout-background')

@section('title', 'Page Title')

@section('content')
    <div id="back-button">
        <a href="{{ url("/") }}" id="txt-back-button">
            <p>
                Retour
            </p>
        </a>
    </div>
    <div id="login-area">
        <div id="text-register">
            <p>Connexion</p>    
        </div>
        <div id="input-login">
            <div id="div-login-input">
                <input type="text" id="input-login-pseudo" class="input-text" placeholder="Pseudo" name="name">
            </div>
            <div id="div-password-input">
                <input type="password" id="input-login-password" class="input-text" placeholder="Mot de passe" name="name">
                <span id="eye-password" onclick="hide_password()">
                    <img id="eye" src="{{asset('/image/eye.png')}}" alt="eye">
                    <img id="hidden" src="{{asset('/image/hidden.png')}}" alt="eye">
                </span>
            </div>
            <div id="password-forgotten">
                <a href="#">Mot de passe oublié ?</a>
            </div>
        </div>
        <div id="login-buttons-div">
            <div class="login-button">
                <a class="login-button-text" href="#">
                    <p>
                        Se connecter
                    </p>
                </a>
            </div>
        </div>
    </div>
@endsection

<script src="{{ asset('js/hide_button.js') }}"></script>
    
