// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordRequirements = {
  passwordLength: 8,
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  console.log("Ran generatePassword");

  //Get Length for the Password
  getPasswordLength();
  while (!passwordRequirements >= 8 && !passwordRequirements <= 128) {
    
    alert("Please enter a valid number between 8 and 128");
    getPasswordLength();
  }
}

// Get Password Requirements

function getPasswordLength() {
  console.log("Ran getPasswordLength");
  passwordRequirements.passwordLength  = prompt("Password length (8-128 characters", 12);
  return passwordRequirements.passwordLength;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
