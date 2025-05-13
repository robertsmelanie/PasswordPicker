function generatepassword(passwordLength, lower, upper, number, special) {
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
    // Loop through the length of the password
    for (let i = 0; i < length; i += typesCount) {
        // Loop through each character type and add a random character to the password
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            password += randomFunctions[funcName]();
        });
    }
    // Return the password with the correct length
    return password.slice(0, passwordLength);
    
}
function getRandomLower() {
    const letters = `abcdefghijklmnopqrstuvwxyz`;

    
}
console.log(getRandomLower()); //Random lowercase letter