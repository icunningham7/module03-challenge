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
  

  console.log("Finished generatePassword");
}

// Get Password Requirements

function getPasswordLength() {
  
  console.log("Ran getPasswordLength");

  let pwLength = prompt("Password length (8-128 characters)", 12);

  while (!(pwLength >= 8 && pwLength <= 128)) {
    console.log("Invalid Password Length");
    alert("Please enter a valid number between 8 and 128");
    pwLength = prompt("Password length (8-128 characters)", 12);
  };
  passwordRequirements.passwordLength = pwLength;
  return passwordRequirements.passwordLength;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
