// Assignment code here
const characters = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*.,",
}

const getCharacter = [
    function lowerCase() {
        return characters.lowerCase[Math.floor(Math.random() * characters.lowerCase.length)];
    },
    function upperCase() {
        return characters.upperCase[Math.floor(Math.random() * characters.upperCase.length)];
    },
    function numbers() {
        return characters.numbers[Math.floor(Math.random() * characters.numbers.length)];
    },
    function symbols() {
        return characters.symbols[Math.floor(Math.random() * characters.symbols.length)];
    },
]

function generatePassword() {
    var userChoice = window.prompt("The password lenght must be between 8 and 128 characters long.");
    var lowPrompt = window.confirm("Press OK to add lower case letters to your password.");
    var uppPrompt = window.confirm("Press OK to add upper case letters to your password.");
    var numbPrompt = window.confirm("Press OK to add numbers to your password.");
    var specCharPrompt = window.confirm("Press OK to add special characters to your password");
    var password = [];


    if (userChoice >= 8 && userChoice >= 128) {

    } 
}

    
generatePassword();




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);