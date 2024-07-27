"use strict";
const modeToggle = document.getElementById("modeToggle");

modeToggle.onclick = function () {
  document.body.classList.toggle("dark-theme");

  // Change the text of the button
  if (document.body.classList.contains("dark-theme")) {
    modeToggle.innerHTML =
      '<img src="images/moon.png" alt="button" />Switch to light mode';
  } else {
    modeToggle.innerHTML =
      '<img src="images/sun.png" alt="button" />Switch to dark mode';
  }
};

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
    alert("Your monthly newsletter subscription is successful.");
  } else {
    alert("Please fill in all required information");
  }
});
