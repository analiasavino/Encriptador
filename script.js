
let btnEncriptar = document.getElementById('btn-encriptar');
let textArea2 = document.querySelector('.text-area2');
let encriptado= document.querySelector('.encriptado');
let btnDesencriptar = document.getElementById('btn-desencriptar');
let botonera2 = document.querySelector('.botonera2');
let btnCopiar = document.getElementById('btn-copiar');
let btnLimpiar = document.getElementById('btn-limpiar');
let input;
let mensajeCodif;
//Funciones

function validar(input) {
    let patron = /^[ a-z ]+$/; // Solo letras minúsculas
    let patron2 = /[(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?]/; //sin caracteres especiales 
    let patron3 = /[áéíóú]$/;
  
    if(patron3.test(input)) {
        alert("Por favor no utilice acentos");
        return false;
    }
    if(patron2.test(input)) {
        alert("Por favor no utilice caracteres especiales");
        return false;
    }
    if(!patron.test(input)) {
        alert("Por favor utilice solo letras minúsculas");
        return false;
    }
        return true; 
}
 
function encriptar(input){  
    let nuevoMensaje = input.split("");
    let indice = 0;
 
    while(indice < nuevoMensaje.length){2
        if(nuevoMensaje[indice] === "a"){
            nuevoMensaje.splice(indice, 1, "ai");
        } else if(nuevoMensaje[indice] === "e"){
            nuevoMensaje.splice(indice, 1, "enter");
        } else if(nuevoMensaje[indice] === "i"){
            nuevoMensaje.splice(indice, 1, "imes");
        } else if(nuevoMensaje[indice] === "o"){
            nuevoMensaje.splice(indice, 1, "ober");
        } else if(nuevoMensaje[indice] === "u"){
            nuevoMensaje.splice(indice, 1, "ufat");
        }
        indice++;
    }
    if (innerWidth < 1024){
        mensajeCodif = nuevoMensaje.join("");
        document.getElementById('parrafo').style="display: none;";
        textArea2.id = 'sin-fondo2';           
        textArea2.innerHTML = mensajeCodif;
        botonera2.removeAttribute("hidden");
        
        
    }else{
        mensajeCodif = nuevoMensaje.join("");
        textArea2.id ='sin-fondo';
        document.getElementById('parrafo').style="display: none;";
        textArea2.innerHTML = mensajeCodif;
        botonera2.removeAttribute("hidden");
        
    }
}

function desencriptar(input){  
  let mensajeOriginal = input.split("");
  let indice = 0;

  while(indice < mensajeOriginal.length){
      if(mensajeOriginal[indice] === "a"){
          mensajeOriginal.splice(indice+1, 1);
      } else if(mensajeOriginal[indice] === "e"){
          mensajeOriginal.splice(indice+1, 4);
      } else if(mensajeOriginal[indice] === "i"){
          mensajeOriginal.splice(indice+1, 3);
      } else if(mensajeOriginal[indice] === "o"){
          mensajeOriginal.splice(indice+1, 3);
      } else if(mensajeOriginal[indice] === "u"){
          mensajeOriginal.splice(indice+1, 3);
      }
      indice++;
  }
  if (innerWidth < 1024){
    let mensajeCodif = mensajeOriginal.join("");
    document.getElementById('parrafo').style="display: none;";
    textArea2.id = 'sin-fondo2';           
    textArea2.innerHTML = mensajeCodif;
    botonera2.removeAttribute("hidden");
    botonera2.style="display:inline";

  }else{
    let mensajeDeCodif = mensajeOriginal.join("");
    textArea2.id= 'sin-fondo';
    textArea2.innerHTML = mensajeDeCodif; 
    document.getElementById('parrafo').style="display:none";
    botonera2.style="display:inline";
  }
}

function copiar(textArea2){
    textArea2.select();
    document.execCommand('copy');
    textArea2.innerHTML="Su texto ha sido copiado";
    btnDesencriptar.removeAttribute("disabled");
       
}

function limpiar(){
    document.getElementById('text-area').value ="";
    textArea2.innerHTML=" ";
    textArea2.id='recarga';
    document.getElementById('parrafo').style="visibility:visible";
    botonera2.style="display:none";
}

//Eventos de botón

btnEncriptar.addEventListener("click", (e) => {
    input = document.getElementById('text-area').value;
    if (validar(input)) {
        encriptar(input);
    }
});
    

btnCopiar.addEventListener("click",(e)=>{
    copiar(textArea2); 
      
});

btnLimpiar.addEventListener("click",(e)=>{
    limpiar();
    
});

btnDesencriptar.addEventListener("click",(e)=>{
    input = document.getElementById('text-area').value;
    desencriptar(input);
    
    
});

