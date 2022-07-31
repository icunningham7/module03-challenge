// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordSettings = {
  passwordLength: 12,
  passwordLower: false,
  passwordUpper: false,
  passwordNumeric: false,
  passwordSpecial: false
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  getPasswordSettings();

  console.log("Your password settings passed validation. Need to implement actual password generation");
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

  console.log("Finished generatePassword");
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
  
  return passwordSettings.passwordLower;
}

function setUppercase() {

  passwordSettings.passwordUpper = confirm("Do you want to include uppercase letters?");

  console.log(`passwordUpper is set to ` + passwordSettings.passwordUpper);
  console.log(`passwordUpper typeof is ` + (typeof passwordSettings.passwordUpper));

  return passwordSettings.passwordUpper;
}

function setNumeric() {

  passwordSettings.passwordNumeric = confirm("Do you want to include numbers?");

  return passwordSettings.passwordNumeric;
}

function setSpecial() {

  passwordSettings.passwordSpecial = confirm("Do you want to include special characters?");

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

// Validate Password Parameters - 2 or more character groups must be chosen

function validatePasswordSettings() {
  let pwSettingsCounter = 0;
  for (property in passwordSettings) {
    console.log(property + "has a type of " + (typeof (passwordSettings[property])) + " and has a value of " + passwordSettings[property]);
    if ((passwordSettings[property]) === true) {
      pwSettingsCounter++;
      console.log(pwSettingsCounter);
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

