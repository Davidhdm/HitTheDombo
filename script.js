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
    let drum1 = document.getElementById("drum1");
    
    if (drum1.paused){
        drum1.play();
    }else{
        drum1.pause();
    }
}

function audio2(){
    let drum1 = document.getElementById("drum2");
    
    if (drum1.paused){
        drum1.play();
    }else{
        drum1.pause();
    }
}


function audio3(){
    let drum1 = document.getElementById("drum3");
    
    if (drum1.paused){
        drum1.play();
    }else{
        drum1.pause();
    }
}

function audio4(){
    let drum1 = document.getElementById("drum4");
    
    if (drum1.paused){
        drum1.play();
    }else{
        drum1.pause();
    }
}