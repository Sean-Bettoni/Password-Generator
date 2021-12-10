var options = [];
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var specialCharacters = ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~';
var numbers = '0123456789';

var generateBtn = document.querySelector("#generate");

// Function to write the password
function writePassword() {
  var createdPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = createdPassword;
}

// Event listener on generate button
generateBtn.addEventListener("click", writePassword);

// Setting the length and toggle character types from user input
function generatePassword() {
  var passwordLength = window.prompt('The number of characters your password will be');

  if (!passwordLength) {
    return;
  }

  if (isNaN(passwordLength)) {
    window.alert('You can only input numbers here.')
    return generatePassword();
  }

  if (passwordLength < 8) {
    window.alert('Your password must have a minimum of 8 characters.');
    return generatePassword();
  }

  if (passwordLength > 128) {
    window.alert('Your password must not exceed 128 characters.');
    return generatePassword();
  }

  isLower = window.confirm('Do you want to include lower case?');
  isUpper = window.confirm('Do you want to include upper case?');
  isNumber = window.confirm('Do you want to include numbers?');
  isSpecialCharacters = window.confirm('Do you want to include special characters?');

  if (!isLower && !isUpper && !isNumber && !isSymbol) {
    window.alert('You must have at least one character type selected')
    return generatePassword();
  }

  // lowercase
  if (isLower && isUpper && isNumber && isSpecialCharacters) {
    userInput = lowercase.concat(uppercase, numbers, specialCharacters);
  }

  if (isLower && isUpper && isNumber && !isSpecialCharacters) {
    userInput = lowercase.concat(uppercase, numbers);
  }
  
  if (isLower && isUpper && !isNumber && !isSpecialCharacters) {
    userInput = lowercase.concat(uppercase);
  }

  if (isLower && !isUpper && isNumber && !isSpecialCharacters) {
    userInput = lowercase.concat(numbers);
  }

  if (isLower && !isUpper && isNumber && isSpecialCharacters) {
    userInput = lowercase.concat(numbers, specialCharacters);
  }

  if (isLower && !isUpper && !isNumber && !isSpecialCharacters) {
    userInput = lowercase;
  }

  // uppercase
  if (isUpper && isLower && isNumber && !isSpecialCharacters) {
    userInput = uppercase.concat(lowercase, numbers);
  }

  if (isUpper && isLower && !isNumber && !isSpecialCharacters) {
    userInput = uppercase.concat(lowercase);
  }

  if (isUpper && !isLower && isNumber && !isSpecialCharacters) {
    userInput = uppercase.concat(numbers);
  }

  if (isUpper && !isLower && !isNumber && !isSpecialCharacters) {
    userInput = uppercase;
  }

  // numbers
  if (islower && isUpper && isNumber && !isSpecialCharacters) {
    userInput = numbers.concat(uppercase, lowercase);
  }

  if (!islower && isUpper && isNumber && !isSpecialCharacters) {
    userInput = numbers.concat(uppercase);
  }

  if (islower && !isUpper && isNumber && !isSpecialCharacters) {
    userInput = numbers.concat(lowercase);
  }

  if (!islower && !isUpper && isNumber && !isSpecialCharacters) {
    userInput = numbers;
  }

  // specialCharacters
  if (!islower && isUpper && isNumber && isSpecialCharacters) {
    userInput = specialCharacters.concat(uppercase, numbers);
  }

  if (!islower && isUpper && !isNumber && isSpecialCharacters) {
    userInput = specialCharacters.concat(uppercase);
  }

  if (islower && !isUpper && !isNumber && isSpecialCharacters) {
    userInput = specialCharacters.concat(lowercase);
  }

  if (!islower && !isUpper && !isNumber && isSpecialCharacters) {
    userInput = specialCharacters;
  }

  if (islower && isUpper && !isNumber && isSpecialCharacters) {
    userInput = specialCharacters.concat(lowercase, uppercase);
  }

  var options = [];
  // This will create the password
  for (var i = 0; i < passwordLength; i++) {
    var passwordString = userInput[Math.floor(Math.random() * userInput.length)];
    options.push(passwordString);
  }


  var createdPassword = options.join("");
  return createdPassword;
}

