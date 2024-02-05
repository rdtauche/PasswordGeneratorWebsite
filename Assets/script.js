// CU Bootcamp: Assignment Code
var generateBtn = document.querySelector("#generate");

//Ross: Function #1 - this function generates the password and lists all characters that are allowed in creating it
function getPassword() {
  var numeric = "0123456789";
  var symbols = "!@#$%^&*()_+-=<>/?[]{}\|";
  var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
  var multiSelect = "";
  var randomKey = "";
  var keyLength = prompt("Your password must contain between 8 and 128 characters in length, please input the length you want");
  if (keyLength < 8 || keyLength > 128) {
    alert("Your password does not meet the minimum criteria.  Passwords must be between 8 and 128 characters in length, please try again");
    return;
  } else {
    var numericOptions = confirm("Your password must have a number, please click OK to continue");
    var specialSymbols = confirm("Your password must have special characters, please click OK to continue");
    var upperAlpha = confirm("Your password must include uppercase letters, please click OK to continue");
    var lowerAlpha = confirm("Your password must contain lowercase letters, please click OK to continue");
  }
  if (upperAlpha) {multiSelect += uppercaseABC;}
  if (lowerAlpha) {multiSelect += lowercaseABC;}
  if (numericOptions) {multiSelect += numeric;}
  if (specialSymbols) {multiSelect += symbols;}
  for (i = 0; i < keyLength; i++) {
    randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
  }
  return(randomKey);
}

// Write password to the #password input
var passwordText = document.querySelector("#password");

//Ross:  Function #2: write password function and call it
function writePassword(randomKey) {
  if (password.length === 0) {
    return;}
    passwordText.value = randomKey;
}

// Ross:  Final step:  Add event listener to generate button
generateBtn.addEventListener("click", function() {writePassword(getPassword()) });