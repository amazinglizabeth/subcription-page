"use strict";
function validateForm() {
  var inputFields = document.querySelectorAll("input[required]");
  var isValid = true;
  inputFields.forEach(function (field) {
    if (field.ariaValueMax.trim() === "") {
      isValid = false;
    }
  });
  if (!isValid) {
    alert("please fill out all required fields.");
    return false; //prevent from submission
  }
  alert("Your subscription is sucessful.");
  return true;
}
