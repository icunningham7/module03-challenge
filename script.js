// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var passwordText = document.querySelector("#password");
var newPassword = "";
var validPassword;

var passwordSettings = {
  passwordLength: 0,
  passwordLower: false,
  passwordUpper: false,
  passwordNumeric: false,
  passwordSpecial: false
};

var CharSets = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}

var passwordCharacters = "";

// Write password to the #password input
function writePassword() {

  newPassword = generatePassword();
  copyBtn.disabled = false;
  passwordText.value = newPassword;

}

function copyPassword() {
  var copyPasswordText = newPassword;
  if (navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(copyPasswordText);
  } else {
    return Promise.reject("This feature isn't working right now. Please select the password and copy it.")
  };
}

function generatePassword() {

  getPasswordSettings();
  characterRandomizer();

  return newPassword;
};
  
// ~ Get Password Settings ~ //

function getPasswordSettings() {
  reset();

  setLength();
  setLowercase();
  setUppercase();
  setNumeric();
  setSpecial();
  
  validatePasswordSettings();
}


// Set Password Length
function setLength() {
  let pwLength = prompt("Password length (8-128 characters)", 12);

  while (!(pwLength >= 8 && pwLength <= 128)) {
    console.log("Invalid Password Length");
    alert("Please enter a valid integer between 8 and 128");
    pwLength = prompt("Password length (8-128 characters)", 12);
  };

  passwordSettings.passwordLength = pwLength;
  return passwordSettings.passwordLength;
};
// Set Password Charset - Lowercase
function setLowercase() {

  passwordSettings.passwordLower = confirm("Do you want to include lowercase letters?");
  if (passwordSettings.passwordLower) {
    passwordCharacters += CharSets.lowercase;
  }
  return passwordSettings.passwordLower;
}
// Set Password Charset - Uppercase
function setUppercase() {

  passwordSettings.passwordUpper = confirm("Do you want to include uppercase letters?");
  if (passwordSettings.passwordUpper) {
    passwordCharacters += CharSets.uppercase;
  }
  return passwordSettings.passwordUpper;
}
// Set Password Charset - Numeric
function setNumeric() {

  passwordSettings.passwordNumeric = confirm("Do you want to include numbers?");
  if (passwordSettings.passwordNumeric) {
    passwordCharacters += CharSets.numeric;
  }
  return passwordSettings.passwordNumeric;
}
// Set Password Charset - Special
function setSpecial() {

  passwordSettings.passwordSpecial = confirm("Do you want to include special characters?");
  if (passwordSettings.passwordSpecial) {
    passwordCharacters += CharSets.special;
  }
  return passwordSettings.passwordSpecial;
}

// Reset App State
function reset() {
  newPassword = "";
  passwordText.value = "";
  passwordCharacters = "";
  copyBtn.disabled = true;
  passwordSettings = {
    passwordLength: 0,
    passwordLower: false,
    passwordUpper: false,
    passwordNumeric: false,
    passwordSpecial: false
  };
};

//  ~ Generate Password ~ //

// Create Randomized String for Password
function characterRandomizer() {
  let pwMin = 0;
  let pwMax = (passwordCharacters.length)++;
  
  for (i = 0; i < passwordSettings.passwordLength; i++) {
    newPassword += passwordCharacters[Math.floor(Math.random() * (pwMax - pwMin) + pwMin)];
  }
  
}

// Validate Password Parameters - 1 or more character sets must be chosen
function validatePasswordSettings() {
  let pwSettingsCounter = 0;
  for (property in passwordSettings) {
    if ((passwordSettings[property]) === true) {
      pwSettingsCounter++;
    };
  };

  if (pwSettingsCounter < 1) {
    alert("Please select 1 or more character sets.");
    getPasswordSettings();
  } else {
    return;
  }
  return;
};

// Verify all selected Charsets are present
function validatePassword() {
  var validatorCount = 0;
  validPassword = false;
  if (passwordSettings.passwordLength === newPassword.length) {
    validatorCount++;
  } else {
    console.log("Error: The password length is incorrect.")
  };

  if ((passwordSettings.passwordLower && ( newPassword.search( CharSets.lowercase ) != -1 )) || !passwordSettings.passwordLower ) {
    validatorCount++;
  } else {
    console.log("Error: No lowercase letters found.")
  };

  if (( passwordSettings.passwordUpperr && ( newPassword.search( CharSets.uppercase ) != -1 )) || !passwordSettings.passwordUpper ) {
    validatorCount++;
  } else {
    console.log("Error: No uppercase letters found.")
  };

  if (( passwordSettings.passwordNumeric && ( newPassword.search( CharSets.numeric ) != -1 )) || !passwordSettings.passwordNumeric ) {
    validatorCount++;
  } else {
    console.log("Error: No numbers found.")
  };

  if (( passwordSettings.passwordLower && ( newPassword.search( CharSets.lowercase ) != -1 )) || !passwordSettings.passwordSpecial ) {
    validatorCount++;
  } else {
    console.log("Error: No special characters found.")
  };

  if (validatorCount === 5) {
    validPassword = true;
    return
  } else {
    alert("An error occured. Please try again.");
    writePassword();
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword)

