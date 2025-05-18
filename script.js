// Helper functions to get random characters
function getRandomLower() {
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomUpper() {
    const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomNumber() {
    const numbers = `0123456789`;
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSpecial() {
    const specials = `!@#$%^&*()_+[]{}|;:,.<>?`;
    return specials[Math.floor(Math.random() * specials.length)];
}

// Object to map checkbox to function 
const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    special: getRandomSpecial
};

//generate password function 
function generatePassword(length, lower, upper, number, special) {
    // Create a variable to store the password
    let password = "";
    // Create a variable to store the types of characters that will be used in the password
    const typesCount = lower + upper + number + special;
    // Create a variable to store the types of characters that will be used in the password
    const typesArr = [{ lower }, { upper }, { number }, { special }].filter(
        item => Object.values(item)[0]
    );
    // If no character types are selected, return an empty string
    if (typesCount === 0) {
        return "";
    }
    //Build the password
    // Loop through the length of the password
    for (let i = 0; i < length; i += typesCount) {
        // Loop through each character type and add a random character to the password
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            password += randomFunctions[funcName]();
        });
    }
    // Return the password with the correct length
    return password.slice(0, length);

}

// DOM Elements
// const resultEl = document.getElementById(`result`);
const clipboardEl = document.getElementById(`copyButton`);
const lengthEl = document.getElementById(`passwordLength`);
const upperEl = document.getElementById(`upper`);
const lowerEl = document.getElementById(`lower`);
const numberEl = document.getElementById(`numbers`);
const specialEl = document.getElementById(`special`);
const generateEl = document.getElementById(`generateButton`);
const outputArea = document.getElementById(`OutputArea`);
const passwordOutput = document.getElementById(`passwordOutput`);
const clearButton = document.getElementById(`clearButton`);
// Event listener for the clear button
clearButton.addEventListener(`click`, () => {
    // Clear the output area and reset the checkboxes
    outputArea.value = ``;
    lengthEl.value = 8;
    lowerEl.checked = true;
    upperEl.checked = false;
    numberEl.checked = false;
    specialEl.checked = false;
});

    

// Event listener for the generate button
generateEl.addEventListener(`click`, () => {
    // Get the values of the checkboxes and length input
    const length = +lengthEl.value;
    const lower = lowerEl.checked;
    const upper = upperEl.checked;
    const number = numberEl.checked;
    const special = specialEl.checked;

    // Generate the password
    const password = generatePassword(length, lower, upper, number, special);

    outputArea.value = password;
  
 
});
 

// Function to copy the password to the clipboard
clipboardEl.addEventListener(`click`, () => {
    // Accessing the text/string value (AKA the Password) for the "result" span and setting it the the "password" variable
    const password = outputArea.value;

   

    if (!password) {
        alert("Please generate a password first");
        return;
    }
    navigator.clipboard.writeText(password)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy password to clipboard."));
    
});

