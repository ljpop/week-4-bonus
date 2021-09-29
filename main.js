"use strict";

/*TODO: one sentance, change word*/




const errorFirstName = "First Name cannot be empty"; 
const errorLastName = "Last Name cannot be empty"; 
const errorEmail = "Email cannot be empty"; 
const errorPass = "Password cannot be empty"; 

const errorWrong = "Looks like this is not an email"; 

const displayMessage = function (message) {
  document.querySelector(".errorMessage").textContent = message;
  document.querySelector(".errorMessage").classList.add("visible");
  document.querySelector(".errorMessage").classList.add("errorClass");
};

const everythingOk = function () {
alert('Everything is OK :)')
};

const removeMessage = function () {
  document.querySelector(".errorMessage").classList.remove("visible");
  document.querySelector(".errorMessage").classList.remove("checkPassed");
};

const validateEmail = function (email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};






const doCheck = function (event) {
    event.preventDefault();
//   removeMessage();

  const fname = document.querySelector('[name="fname"]').value;
  const lname = document.querySelector('[name="lname"]').value;
  const mail = document.querySelector('[name="mail"]').value;
  const pass = document.querySelector('[name="password"]').value;

  console.log(fname);
  console.log(lname);
  console.log(mail);
  console.log(pass);


  if (mail == "" || mail == " ") displayMessage(errorEmail);
  else if (!validateEmail(mail)) displayMessage(errorWrong);
  else everythingOk();
};

