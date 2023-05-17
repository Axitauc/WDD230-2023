const button = document.querySelector("button");
const userinput = document.querySelector("#favchap");
const mylist = document.querySelector("#list");

button.addEventListener("click", () => {
  // Make sure the input is not blank.
  if (userinput.value == "null") {
    return;
  }

  // Create an li element.
  newlistitem = document.createElement("li");

  // create a delete button
  deletebutton = document.createElement("button");

  // populate the li elements textContent or innerHTML the input
  newlistitem.textContent = userinput.value;
  deletebutton.textContent = "❌";
  newlistitem.append(deletebutton);
  mylist.append(newlistitem);
  deletebutton.addEventListener("click", () => {
    mylist.remove();
  });
  userinput.focus();
  userinput.value = "";
});
