// let random = Math.random();
// if (random < 0.5) {
//     console.log("NUMBER IS LESS THAN 0.5!")
// } else {
//     console.log("NUMBER IS GREATER THAN 0.5!");
// }
// console.log(random);


// const dayOfWeek = 'MARCH';

// if (dayOfWeek === 'Monday') {
//     console.log("IT'S MONDAY!")
// } else if (dayOfWeek === 'Saturday') {
//     console.log("IT'S SATURDAY")
// } else if (dayOfWeek === 'Sunday') {
//     console.log("IT'S SUNDAY")
// } else {
//     console.log("INVALID DAY!")
// }

// // 0 - 5 - FREE
// // 5 - 10 CHILD $10
// // 10 - 65 ADULT $20
// // 65+ SENIOR $30

// const age = 90;

// if (age < 5) {
//     console.log("You are a baby. FREE!")
// } else if (age < 10) {
//     console.log("You are a child. Pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. Pay $20")
// } else {
//     console.log("You are a senior. Pay $30")
// }


const password = prompt("Enter a Password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("GREAT! NO SPACE!")
    } else {
        console.log("Password cannot contain spaces")
    }
} else {
    console.log("PASSWORD TOO SHORT. 6+ characters please")
}

