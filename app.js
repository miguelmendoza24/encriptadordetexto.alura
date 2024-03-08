var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


function encriptar() {
    ocultarAdelante();
  var area = recuperarTexto();
  resultado.textContent = encriptarTexto(area);
  asignarTextoElemento("h4", "mensaje encriptado:")
}

function desencriptar(){
  ocultarAdelante();
  var area = recuperarTexto();
  resultado.textContent = desencriptarTexto(area);
  asignarTextoElemento("h4", "mensaje desencriptado:");
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function recuperarTexto() {
  var area = document.querySelector(".area");
  return area.value;
}

function ocultarAdelante() {
  munieco.classList.add("ocultar");
  h3.classList.add("ocultar");
  parrafo.classList.add("ocultar")
}

function encriptarTexto(mensaje){
  var texto = mensaje;
  var textoFinal ="";

  for (var i = 0; i < texto.length; i ++){
    if (texto[i] == "a") {
      textoFinal=textoFinal +"ai"
    }
        else if (texto[i] == "e") {
          textoFinal = textoFinal + "enter";
    }
        else if (texto[i] == "i") {
          textoFinal = textoFinal + "imes";
    }
        else if (texto[i] == "o") {
          textoFinal = textoFinal + "ober";
    }
        else if (texto[i] == "u") {
          textoFinal = textoFinal + "ufal";
    }
        else {
          textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a"; i = i+1;
    }
    else if (texto[i] == "e") {
      textoFinal = textoFinal + "e"; i=i+4;
    }
    else if (texto[i] == "i") {
      textoFinal = textoFinal + "i"; i=i+3;
    }
    else if (texto[i] == "o") {
      textoFinal = textoFinal + "o"; i=i+3;
    }
    else if (texto[i] == "u") {
      textoFinal = textoFinal + "u"; i=i+3;
    }
    else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

let btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", function () {
  let contenido = document.querySelector(".texto-resultado").textContent;
  navigator.clipboard
    .writeText(contenido)
    .then(() => {
      document.querySelector(".area").value = "";
      document.querySelector(".texto-resultado").textContent = "";

      munieco.classList.remove("ocultar");
      h3.classList.remove("ocultar");
      parrafo.classList.remove("ocultar");
    })
    .catch((err) => {
      console.error("Error al copiar texto: ", err);
    });
});
