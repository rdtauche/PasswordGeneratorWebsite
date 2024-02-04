// CU Bootcamp: Assignment Code
var generateBtn = document.querySelector("#generate");

//Ross: Step #1 - this function generates the password and lists all characters that are allowed in creating it
function getPassword() {
  var number = 0123456789;
  var special = "!@#$%^&*()_+-=<>/?[]{}\|";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var length = prompt("Your password must contain between 8 and 128 characters in length, please input the length you want");
}

// Ross: Step #2 - if the input provided is less than 8 or greater than 128, we return an error message
if (length < 8 || length > 128 || isNaN(length)) {
  alert("Your password does not meet the minimum criteria.  Passwords must be between 8 and 128 characters in length, please try again");
} 

else {
  var numbers = confirm("Your password must have a number, please click OK to continue");
  var specials = confirm("Your password must have special characters, please click OK to continue");
  var uppercases = confirm("Your password must include uppercase letters, please click OK to continue");
  var lowercases = confirm("Your password must contain lowercase letters, please click OK to continue");
}

for (i = 0; i < length; i++) {
  randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
}

// Write password to the #password input. The text box area where the newly generated password will appear.
var passwordText = document.querySelector("#password");
function writePassword() {
if (password.length === 0) {
    return;
}
passwordText.value = randomKey;
}

// Add event listener to generate button. This is a Call To Action (CTA button)
generateBtn.addEventListener("click", function () { writePassword(getPassword()) });
