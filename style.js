"use strict";
document.getElementById("toggleButton").addEventListener("click", function () {
  var displayText = document.getElementById("displayText");
  var inputFields = document.querySelectorAll("input");

  var allFilled = true;
  inputFields.forEach(function (input) {
    if (
      (input.type === "text" ||
        input.type === "number" ||
        input.type === "email") &&
      input.value === ""
    ) {
      allFilled = false;
    } else if (
      (input.type === "checkbox" || input.type === "radio") &&
      !input.checked
    ) {
      allFilled = false;
    }
  });

  if (allFilled) {
    displayText.classList.toggle("hidden");
    displayText.classList.toggle("visible");
    alert("Your monthly newsletter subscription is succesful.");
  } else {
    alert("Please fill in all required information");
  }
});
