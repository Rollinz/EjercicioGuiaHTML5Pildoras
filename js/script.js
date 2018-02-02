// Javascript document
var imagen = new Array(3);

function ejecuta(){
    // for(var i = 0; i<3; i++)
    // {
    //     document.getElementsByTagName("figure")[i].onclick=saludo;
    // }
    // document.getElementById("figura1").onclick=saludo;
    // var r = document.getElementsByClassName("figura")[0].onclick=saludo

    // document.querySelector("#division").onclick=saludo;
    
    // var elementos = document.querySelectorAll(".figura1, span");
    
    // for (var index = 0; index < elementos.length; index++) {
    //     elementos[index].onclick=saludo;    
    // }
    
}

function saludo(){
    alert("Presionaste una pieza de replica");
}

function crecer() {
    imagen.width=400;
    imagen.height=400;
}

function disminuir() {
    imagen.width=200;
    imagen.height=200;
}

function piezasReplica() {

    for(var i = 0; i < 4; i++){
        imagen[i] = document.getElementsByTagName("img")[i];
    }

    for(var j=0; j<4; j++){
        imagen[j].addEventListener("mouseover", crecer, false);
        imagen[j].addEventListener("mouseout", disminuir, false);
        imagen[j].addEventListener("click", saludo, false);
    }
    
}

window.addEventListener("load", piezasReplica, false);