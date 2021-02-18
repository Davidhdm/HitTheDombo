function changelogin(){
    let btnLogin = document.getElementById("login");

    if (btnLogin.innerHTML === "Log in"){
        btnLogin.innerHTML = "Log out";
    }
    else{
        btnLogin.innerHTML = "Log in";
    }
}