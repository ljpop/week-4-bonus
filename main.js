"use strict";

/*TODO: one sentance, change word*/


const errorFirstName = "First Name cannot be empty"; 
const errorLastName = "Last Name cannot be empty"; 
const errorEmail = "Email cannot be empty"; 
const errorPass = "Password cannot be empty"; 

const errorWrong = "Looks like this is not an email"; 

const displayMessageFName = function (message) {
  document.querySelector(".errorMessage1").textContent = message;
  document.querySelector(".errorMessage1").classList.add("visible");
  document.querySelector('[name="fname"]').classList.add("errorClass");
  document.querySelector('[name="fname"]').classList.add("error-icon");  
  document.querySelector('[name="fname"]').placeholder='';  
};

const removeFName = function (message) {
  document.querySelector(".errorMessage1").textContent = message;
  document.querySelector(".errorMessage1").classList.remove("visible");
  document.querySelector('[name="fname"]').classList.remove("errorClass");
  document.querySelector('[name="fname"]').classList.remove("error-icon"); 
};

const displayMessageLName = function (message) {
  document.querySelector(".errorMessage2").textContent = message;
  document.querySelector(".errorMessage2").classList.add("visible");
  document.querySelector('[name="lname"]').classList.add("errorClass");
  document.querySelector('[name="lname"]').classList.add("error-icon");  
  document.querySelector('[name="lname"]').placeholder=''; 
};

const removeLName = function (message) {
  document.querySelector(".errorMessage2").textContent = message;
  document.querySelector(".errorMessage2").classList.remove("visible");
  document.querySelector('[name="lname"]').classList.remove("errorClass");
  document.querySelector('[name="lname"]').classList.remove("error-icon"); 
};

const displayMessageMail = function (message) {
  document.querySelector(".errorMessage3").textContent = message;
  document.querySelector(".errorMessage3").classList.add("visible");
  document.querySelector('[name="mail"]').classList.add("errorClass");
  document.querySelector('[name="mail"]').classList.add("error-icon");  
  document.querySelector('[name="mail"]').placeholder='';  
}

const removeMail = function (message) {
  document.querySelector(".errorMessage3").textContent = message;
  document.querySelector(".errorMessage3").classList.remove("visible");
  document.querySelector('[name="mail"]').classList.remove("errorClass");
  document.querySelector('[name="mail"]').classList.remove("error-icon"); 
};

const displayMessagePass = function (message) {
  document.querySelector(".errorMessage4").textContent = message;
  document.querySelector(".errorMessage4").classList.add("visible");
  document.querySelector('[name="password"]').classList.add("errorClass");
  document.querySelector('[name="password"]').classList.add("error-icon");  
  document.querySelector('[name="password"]').placeholder=''; 
};

const removePass = function (message) {
  document.querySelector(".errorMessage4").textContent = message;
  document.querySelector(".errorMessage4").classList.remove("visible");
  document.querySelector('[name="password"]').classList.remove("errorClass");
  document.querySelector('[name="password"]').classList.remove("error-icon"); 
};


const validateEmail = function (email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const everythingOk = function () {
  // removeMessage(); TODO:
alert('Everything is OK :)')
};

const removeMessage = function () {
  document.querySelectorAll(".errorMessage").classList.remove("visible");
  document.querySelectorAll(".input-form").classList.remove("errorClass");  
  document.querySelectorAll(".input-form").classList.remove("error-icon");
};

const doCheck = function (event) {  
  event.preventDefault();

  const fname = document.querySelector('[name="fname"]').value;
  const lname = document.querySelector('[name="lname"]').value;
  const mail = document.querySelector('[name="mail"]').value;
  const pass = document.querySelector('[name="password"]').value;
 
  if (fname == "" || fname == " ") displayMessageFName(errorFirstName);
  else removeFName();

  if (lname == "" || lname == " ") displayMessageLName(errorLastName); 
  else removeLName(); 

  if (pass == "" || pass == " ") displayMessagePass(errorPass);
  else removePass();

  if (mail == "" || mail == " ") displayMessageMail(errorEmail);  
  else if (!validateEmail(mail)) displayMessageMail(errorWrong);
  else removeMail();  


  
};

