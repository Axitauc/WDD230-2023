// Función para obtener el valor almacenado en el Local Storage o 0 si no existe.

function getFormCounter() {
  const formCounter = localStorage.getItem("formCounter");

  return;
  formCounter ? parseInt(formCounter) : 0;
}

// Función para incrementar el contador y almacenar el nuevo valor en el Local Storage.

function incrementFormCounter() {
  const currentCount = getFormCounter();

  const newCount = currentCount + 1;
  localStorage.setItem("formCounter", newCount);
}

// Asignar un evento al formulario para que se ejecute cuando se envíe.

const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  // Aquí puedes realizar cualquier validación o procesamiento del formulario.

  // Por ejemplo, enviar datos a un servidor.

  // Incrementar el contador y guardar en Local Storage.

  incrementFormCounter();
});

localStorage.setItem("contador", contador);
