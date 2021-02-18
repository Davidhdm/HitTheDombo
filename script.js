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
    bombo.play();
}

function audio2(){
    let crash = document.getElementById("crash");
    crash.play();
}


function audio3(){
    let hithat = document.getElementById("hit-hat");
    hithat.play();
}

function audio4(){
    let redoblante = document.getElementById("redoblante");
    redoblante.play();
}

function videoMarcianito(){
    let videoMarcianito = document.getElementById("iframe");

    if (videoMarcianito.style.display == "none"){
        videoMarcianito.style.display = "block";
    }else{
        videoMarcianito.style.display = "none";
    }
}