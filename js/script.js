// Javascript document

function ejecuta(){
    // for(var i = 0; i<3; i++)
    // {
    //     document.getElementsByTagName("figure")[i].onclick=saludo;
    // }
    // document.getElementById("figura1").onclick=saludo;
    // var r = document.getElementsByClassName("figura")[0].onclick=saludo

    // document.querySelector("#division").onclick=saludo;
    
    var elementos = document.querySelectorAll(".figura1, span");
    
    for (var index = 0; index < elementos.length; index++) {
        elementos[index].onclick=saludo;    
    }
    
}

function saludo(){
    alert("Presionaste una imagen");
}

window.onload=ejecuta;