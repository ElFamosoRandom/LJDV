<?php

namespace App\Http\Controllers;

use Session;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;


class UtilisateurController extends Controller
{

    public function login() {

        return view('login-page');
    }

    public function register() {

        return view('register-page');
    }

    public function registerStepOne() {

        return view('register-step-one');
    }
}
