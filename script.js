// Assignment code here
var optionsChoseByUser = {
    passwordLength: 0,
    containLowerCase: false,
    containUpperCase: false,
    containNumbers: false,
    containSymbols: false,
}

var functionToExecute = [];
var password;

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*.,";

const getCharacter = {
    lowerCase: function() {
        return lowerCase[Math.floor(Math.random() * lowerCase.length)];
    },
    upperCase: function() {
        return upperCase[Math.floor(Math.random() * upperCase.length)];
    },
    numbers: function() {
        return numbers[Math.floor(Math.random() * numbers.length)];
    },
    symbols: function() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
}

function askUserForPasswordLength() {
    const passwPrompt = window.prompt("Please choose a number between 8 and 128.");
    if (passwPrompt >= 8 && passwPrompt <= 128) {
        optionsChoseByUser.passwordLength = passwPrompt
    } else {
        window.alert("The password must have between 8 and 128 characters.")
        askUserForPasswordLength()
    }
}

function askUserIfTheyWantLowerCase() {
    const lowPrompt = window.confirm("Press OK to add Lower Case Letters to your password.");
    optionsChoseByUser.containLowerCase = lowPrompt
}

function askUserIfTheyWantUpperCase() {
    const uppPrompt = window.confirm("Press OK to add Upper Case Letters to your password.");
    optionsChoseByUser.containUpperCase = uppPrompt
}

function askUserIfTheyWantNumbers() {
    const numPrompt = window.confirm("Press OK to add Numbers to your password.");
    optionsChoseByUser.containNumbers = numPrompt
}

function askUserIfTheyWantSymbols() {
    const symbPrompt = window.confirm("Press OK to add Symbols to your password.");
    optionsChoseByUser.containSymbols = symbPrompt
}

function generatePassword() {
    askUserForPasswordLength();
    askUserIfTheyWantLowerCase(); 
    askUserIfTheyWantUpperCase();
    askUserIfTheyWantNumbers();
    askUserIfTheyWantSymbols();  
    password = "";
    if (optionsChoseByUser.containLowerCase) {
        functionToExecute.push(getCharacter.lowerCase)
    }
    if (optionsChoseByUser.containUpperCase) {
        functionToExecute.push(getCharacter.upperCase) 
    }
    if (optionsChoseByUser.containNumbers) {
        functionToExecute.push(getCharacter.numbers) 
    }
    if (optionsChoseByUser.containSymbols) {
        functionToExecute.push(getCharacter.symbols) 
    }

    for(i = 0; i < optionsChoseByUser.passwordLength; i++) {
        let option = [Math.floor(Math.random() * functionToExecute.length)];
        let result = functionToExecute[option]
        password += result()
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
