function changelogin(){
    let btnLogin = document.getElementById("login");

    if (btnLogin.innerHTML === "Log in"){
        btnLogin.innerHTML = "Log out";
    }
    else{
        btnLogin.innerHTML = "Log in";
    }
}

function audio1(){
    let bombo = document.getElementById("bombo");
    if (bombo.paused) {
        bombo.play();
    }else{
        bombo.currentTime = 0
    }
}

function audio2(){
    let crash = document.getElementById("crash");
    if (crash.paused) {
        crash.play();
    }else{
        crash.currentTime = 0
    }
}

function audio3(){
    let hithat = document.getElementById("hit-hat");
    if (hithat.paused) {
        hithat.play();
    }else{
        hithat.currentTime = 0
    }
}

function audio4(){
    let redoblante = document.getElementById("redoblante");
    if (redoblante.paused) {
        redoblante.play();
    }else{
        redoblante.currentTime = 0
    }
}

function videoMarcianito(){
    let videoMarcianito = document.getElementById("iframe");

    if (videoMarcianito.style.display == "none"){
        videoMarcianito.style.display = "block";
    }else{
        videoMarcianito.style.display = "none";
    }
}