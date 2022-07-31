// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var newPassword = "";

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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  copyBtn.disabled = false;

  passwordText.value = password;

}

function copyPassword() {
  var copyPasswordText = newPassword;
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    console.log(copyPasswordText);
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
  
// Get Password Settings

function getPasswordSettings() {

  console.log("Getting Password Settings");

  settingsReset();

  setLength();
  setLowercase();
  setUppercase();
  setNumeric();
  setSpecial();
  
  validatePasswordSettings();
  console.log(passwordCharacters);
  console.log("Finished getPasswordSettings");
}



function setLength() {
  let pwLength = prompt("Password length (8-128 characters)", 12);

  while (!(pwLength >= 8 && pwLength <= 128)) {
    console.log("Invalid Password Length");
    alert("Please enter a valid number between 8 and 128");
    pwLength = prompt("Password length (8-128 characters)", 12);
  };

  passwordSettings.passwordLength = pwLength;
  return passwordSettings.passwordLength;
};

function setLowercase() {

  passwordSettings.passwordLower = confirm("Do you want to include lowercase letters?");
  if (passwordSettings.passwordLower) {
    passwordCharacters += CharSets.lowercase;
  }
  return passwordSettings.passwordLower;
}

function setUppercase() {

  passwordSettings.passwordUpper = confirm("Do you want to include uppercase letters?");
  if (passwordSettings.passwordUpper) {
    passwordCharacters += CharSets.uppercase;
  }
  return passwordSettings.passwordUpper;
}

function setNumeric() {

  passwordSettings.passwordNumeric = confirm("Do you want to include numbers?");
  if (passwordSettings.passwordNumeric) {
    passwordCharacters += CharSets.numeric;
  }
  return passwordSettings.passwordNumeric;
}

function setSpecial() {

  passwordSettings.passwordSpecial = confirm("Do you want to include special characters?");
  if (passwordSettings.passwordSpecial) {
    passwordCharacters += CharSets.special;
  }
  return passwordSettings.passwordSpecial;
}

// Reset User Settings

function settingsReset() {
  passwordSettings = {
    passwordLength: 0,
    passwordLower: false,
    passwordUpper: false,
    passwordNumeric: false,
    passwordSpecial: false
  };
  console.log("Reset all user choices.")
};

// Create Randomized String for Password
function characterRandomizer() {
  let pwMin = 0;
  let pwMax = (passwordCharacters.length)++;
  
  for (i = 0; i < passwordSettings.passwordLength; i++) {
    newPassword += passwordCharacters[Math.floor(Math.random() * (pwMax - pwMin) + pwMin)];
    console.log(newPassword);
  }
  
}

// Validate Password Parameters - 2 or more character sets must be chosen

function validatePasswordSettings() {
  let pwSettingsCounter = 0;
  for (property in passwordSettings) {
    if ((passwordSettings[property]) === true) {
      pwSettingsCounter++;
    };
  };

  if (pwSettingsCounter < 2) {
    alert("Please select 2 or more character sets.");
    // generatePassword();
  } else {
    console.log(`Your generated password is strong. It has ${pwSettingsCounter} character sets.`);
    return;
  }
  return;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword)

