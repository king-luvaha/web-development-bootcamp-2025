const password = prompt("Enter a password");

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid Password!")
} else {
    console.log("Incorrect Password")
}

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

const age = 12;

if (age >= 1 && age < 5 || age >= 65) {
    console.log("FREE");
} else if (age>=5 && age < 10) {
    console.log("$10");
} else if (age >=10 && age < 65) {
    console.log("$20");
} else {
    console.log("Invalid Age!");
}

let firstName = prompt("Enter your first name");

if (!firstName) {
    firstName = prompt("Enter your first name");
}