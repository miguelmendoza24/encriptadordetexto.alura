document.addEventListener("DOMContentLoaded", () => {
  const areaTexto = document.getElementById("areaTexto");
  const btnEncriptar = document.getElementById("btnEncriptar");
  const btnDesencriptar = document.getElementById("btnDesencriptar");
  const btnCopiar = document.getElementById("btnCopiar");
  const textoResultado = document.getElementById("textoResultado");

  function encriptarTexto(texto) {
    return texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufal");
  }

  function desencriptarTexto(texto) {
    return texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufal/g, "u");
  }

  function mostrarResultado(texto) {
    textoResultado.textContent = texto;
    btnCopiar.classList.remove("d-none");
  }

  btnEncriptar.addEventListener("click", () => {
    const texto = areaTexto.value.trim();
    if (texto) mostrarResultado(encriptarTexto(texto));

    document.getElementById("areaTexto").value = "";

  });

  btnDesencriptar.addEventListener("click", () => {
    const texto = areaTexto.value.trim();
    if (texto) mostrarResultado(desencriptarTexto(texto));

    document.getElementById("areaTexto").value = "";

  });

  btnCopiar.addEventListener("click", () => {
    navigator.clipboard
      .writeText(textoResultado.textContent)
      .then(() => alert("Texto copiado al portapapeles"));
  });
});
