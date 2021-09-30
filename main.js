"use strict";

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
  document.getElementById(id).placeholder='';  
};

const removeError = function (id, error) {
  document.querySelector(error).textContent = '';
  document.querySelector(error).classList.remove("visible");
  document.getElementById(id).classList.remove("error-icon");    
  document.getElementById(id).classList.remove("errorClass");
};

const validateEmail = function (email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const checkEmpty=function(errorMsg, id, errorClass){
  const inputVal = document.getElementById(id).value;
  if (inputVal == "" || inputVal == " ") {displayMessage(errorMsg, id, errorClass); return true;}
  else {removeError(id, errorClass); return false;}  
}

const checkWrong=function(errorMsg, id, errorClass){ 
  const inputVal = document.getElementById(id).value;
  if (!validateEmail(inputVal)) displayMessage(errorMsg, id, errorClass);
  else removeError(id, errorClass);
}

const doCheck = function (event) {  
  event.preventDefault();
  checkEmpty(errorFirstName, 'fname', ".errorMessage1");
  checkEmpty(errorLastName, 'lname', ".errorMessage2");    
  if(checkEmpty(errorEmail, 'mail', ".errorMessage3")) 
    {checkEmpty(errorEmail, 'mail', ".errorMessage3");} 
  else checkWrong(errorWrong, 'mail', ".errorMessage3");   
  checkEmpty(errorPass, 'password', ".errorMessage4");  
};

