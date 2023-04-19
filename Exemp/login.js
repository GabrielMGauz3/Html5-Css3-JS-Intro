
var btnentrar = document.querySelector("#entrar");
var btninscrever = document.querySelector("#inscrever");

var body = document.querySelector ("body");

btnentrar.addEventListener("click", function(){
    body.className = "entrar-js"
});

btninscrever.addEventListener("click", function(){
    body.className = "inscrever-js";
});
