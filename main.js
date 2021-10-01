"use strict";

let errorMsg;
let errorClass;
let counter = 0; /*if the button has been clicked more than zero*/

/* IDEA TODO: use one errorMsg, change first word*/
const errorFirstName = "First Name cannot be empty";
const errorLastName = "Last Name cannot be empty";
const errorEmail = "Email cannot be empty";
const errorPass = "Password cannot be empty";
const errorWrong = "Looks like this is not an email";

const displayMessage = function (message, id, errorClass) {
  document.querySelector(errorClass).textContent = message;
  document.querySelector(errorClass).classList.add("visible");
  document.getElementById(id).classList.add("errorClass");
  document.getElementById(id).classList.add("error-icon");
  document.getElementById(id).placeholder = "";
};

const removeError = function (id, error) {
  document.querySelector(error).textContent = "";
  document.querySelector(error).classList.remove("visible");
  document.getElementById(id).classList.remove("error-icon");
  document.getElementById(id).classList.remove("errorClass");
};

const validateEmail = function (email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

/* IDEA TODO: use objects insted of switch-case*/

const getInfo = function (id) {
  switch (id) {
    case "fname":
      errorMsg = errorFirstName;
      errorClass = ".errorMessage1";
      break;

    case "lname":
      errorMsg = errorLastName;
      errorClass = ".errorMessage2";
      break;

    case "mail":
      errorMsg = errorEmail;
      errorClass = ".errorMessage3";
      break;

    case "password":
      errorMsg = errorPass;
      errorClass = ".errorMessage4";
      break;
  }
};

const checkEmpty = function (id) {
  const inputVal = document.getElementById(id).value;
  getInfo(id);
  if (inputVal == "" || inputVal == " ") {
    displayMessage(errorMsg, id, errorClass);
    return true;
  } else {
    removeError(id, errorClass);
    return false;
  }
};

const checkWrong = function (errorMsg, id) {
  const inputVal = document.getElementById(id).value;
  if (!validateEmail(inputVal)) displayMessage(errorMsg, id, errorClass);
  else removeError(id, errorClass);
};

const doCheck = function (event) {
  event.preventDefault();
  checkEmpty("fname");
  checkEmpty("lname");
  if (checkEmpty("mail")) {
    checkEmpty("mail");
  } else checkWrong(errorWrong, "mail");
  checkEmpty("password");
  counter += 1;
  return counter;
};

const checkInput = function (id) {
  if (counter) {
    getInfo(id);
    if (id == "mail") {
      if (checkEmpty("mail")) {
        checkEmpty("mail");
      } else {
        checkWrong(errorWrong, "mail");
      }
    } else if (checkEmpty(id)) checkEmpty(id);
  }
};
