const maxAllowedSelections = 3; // Número máximo de selecciones permitidas

function fetchCheckboxOptions() {
  return [
    { name: "Apple" },
    { name: "Orange" },
    { name: "Banana" },
    { name: "Mango" },
    { name: "Grapes" },
    { name: "Watermelon" },
    { name: "Strawberry" },
    { name: "Pineapple" },
    { name: "Cherry" },
    { name: "Kiwi" },
    { name: "Pear" },
    { name: "Peach" },
    { name: "Plum" },
    { name: "Blueberry" },
    { name: "Raspberry" },
    { name: "Blackberry" },
  ];
}

function createCheckboxOption(option) {
  const checkboxContainer = document.getElementById("checkbox-container");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "fruit[]";
  checkbox.value = option.name;
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(option.name));
  checkboxContainer.appendChild(label);

  checkbox.addEventListener("change", onCheckboxChange);
}

function saveSelectedFruitsToLocalStorage(selectedFruits) {
  localStorage.setItem("selectedFruits", JSON.stringify(selectedFruits));
}

function loadSelectedFruitsFromLocalStorage() {
  const selectedFruits =
    JSON.parse(localStorage.getItem("selectedFruits")) || [];
  const checkboxes = document.querySelectorAll('input[name="fruit[]"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectedFruits.includes(checkbox.value);
    updateCheckboxStatus(checkbox);
  });
}

function onCheckboxChange() {
  const selectedCheckboxes = document.querySelectorAll(
    'input[name="fruit[]"]:checked'
  );
  if (selectedCheckboxes.length >= maxAllowedSelections) {
    const uncheckedCheckboxes = document.querySelectorAll(
      'input[name="fruit[]"]:not(:checked)'
    );
    uncheckedCheckboxes.forEach((checkbox) => {
      checkbox.disabled = true;
    });
  } else {
    const allCheckboxes = document.querySelectorAll('input[name="fruit[]"]');
    allCheckboxes.forEach((checkbox) => {
      checkbox.disabled = false;
    });
  }
}

function onSubmitForm(event) {
  event.preventDefault();
  const selectedCheckboxes = document.querySelectorAll(
    'input[name="fruit[]"]:checked'
  );
  const numSelectedFruits = selectedCheckboxes.length;

  if (numSelectedFruits !== maxAllowedSelections) {
    console.log(
      `Debes seleccionar exactamente ${maxAllowedSelections} frutas.`
    );
    return;
  }

  const selectedFruits = Array.from(selectedCheckboxes).map(
    (checkbox) => checkbox.value
  );
  saveSelectedFruitsToLocalStorage(selectedFruits);
  console.log("Selecciones guardadas en el Local Storage:", selectedFruits);

  const form = document.getElementById("order-form");
  const formData = selectedFruits.join(",");
  const encodedFormData = encodeURIComponent(formData);
  form.action = `confirmation.html?data=${encodedFormData}`;
  form.submit();
}

function generateCheckboxOptions() {
  const checkboxOptions = fetchCheckboxOptions();
  checkboxOptions.forEach(createCheckboxOption);
}

generateCheckboxOptions();
loadSelectedFruitsFromLocalStorage();

const form = document.getElementById("order-form");
form.addEventListener("submit", onSubmitForm);
