function hide_password(){

    var input_password = document.getElementById("input-login-password");
    var img_eye = document.getElementById("eye");
    var img_hidden = document.getElementById("hidden");

    if (input_password.type === "password"){
        input_password.type = "text"
        img_eye.style.display = "block";
        img_hidden.style.display = "none";
    }
    else{
        input_password.type = "password"
        img_eye.style.display = "none";
        img_hidden.style.display = "block";
    }

}


