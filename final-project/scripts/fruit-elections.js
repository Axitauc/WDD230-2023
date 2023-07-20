const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', limitCheckboxSelections);
});

function limitCheckboxSelections() {
  const maxSelections = 3;
  let selectedCount = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCount++;
    }

    if (selectedCount > maxSelections) {
      checkbox.checked = false; // Uncheck the checkbox if it exceeds the limit
    }
  });
}
