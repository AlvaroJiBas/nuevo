function mostrarNombre() {
    var element = document.getElementById("nombre");
    element.innerText="Hola alvaro";
    
}
function decirNombre(){
    var nombre =document.getElementById("nombres").value;
    var edad=document.getElementById("edad").value;
    alert(`Hola ${nombre} tienes ${edad} años`);
}
var barra =document.getElementById("barra");
var secreto = document.getElementById("secreto");
var boton = document.getElementById("boton");
var valor= 10;
let intervalo="";
function barraCarga(){

    barra.value=valor;
   
    valor+=10;
    if (valor > 100){
        clearInterval(intervalo);
        secreto.innerText="No hay secretos para ti corazon ❤️❤️❤️";
        boton.removeAttribute("disabled");
    }
}
function contarSecreto(){
   
    if (valor >=100){
        valor=0;
        barra.value=0;
        
    }
    secreto.innerText="Cargando...."
    boton.setAttribute("disabled", "true");
    intervalo= setInterval(barraCarga,1000);
}
