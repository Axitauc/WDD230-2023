// Recuperar el valor del contador desde el LocalStorage

var contadorValue = localStorage.getItem("contador");

// Verificar si el contador existe en el LocalStorage y mostrarlo

if (contadorValue !== null) {
  document.getElementById("contador-placeholder").innerText = contadorValue;
}
