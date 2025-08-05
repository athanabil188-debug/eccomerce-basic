function greeting() {
  firstName = "Nabil";
  lastName = "Nabil";
  console.log(`My name is ${firstName} ${lastName}`);
  console.log();
}
greeting();
greeting();

// function wisata() {
//   var menus = ["bolobudur","pantai kuta","taman mini"];
//   var random = Math.floor(Math.random() * menus.length);
//   var recommendation = menus[random];
//   console.log(`I recommend ${recommendation}`);
// }
// function game() {
//   var menus = ["forza horizon","cdid","bussid"];
//   var random = Math.floor(Math.random() * menus.length);
//   var recommendation = menus[random];
//   console.log(`I recommend ${recommendation}`);
// }

// function movie() {
//   var menus = ["Naruto","Adit sopo jarwo","jumbo"];
//   var random = Math.floor(Math.random() * menus.length);
//   var recommendation = menus[random];
//   console.log(`I recommend ${recommendation}`);
// }

// var a = 10;
// function scope() {
//   //variable value printed inside a function
//   console.log(a);
// }

// scopeA();

// function scope() {
//   b = 10;
// }
// scope();
// console.log();

//function expression without function name (anonym)
// var greeting = function (){
//   console.log('Hello World')
// }
// //call function
// greeting()

// var greeting = function () {
//   console.log("Hello World");
// };

// greeting()

// function sayHello() {
//   console.log("Hello");
// }
// sayHello()

// // Membuat function sum dengan arrow function
// const sum = (a, b) => {
//   console.log(a+b)
// }

// sum(10, 20)
// sum(99,1)

// function check() {
//   console.log("Hi");
//   return;
//   console.log("World");
// }

// check();

// function findNumberLocation(numbers) {
//   for (i=0; i <numbers; i++) {
//       if (numbers[i] === 1111) {
//           return i; // Return the index if the number is found
//       }
//   }

// }

// var numberList = [111,11,1,111,1111,11,1111]
// var numLocation = findNumberLocation(numberList)
// console.log('1111 is located at index ${numLocation}')

// function findNumberLocation(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 1111) {
//       return i; // Hentikan program dan kembalikan indeks saat ditemukan
//     }
//   }
//   return -1; // Jika 1111 tidak ditemukan, kembalikan -1
// }

// var numberList = [111, 11, 1, 111, 1111, 11, 11, 111, 1, 111];
// var numLocation = findNumberLocation(numberList);
// console.log(`1111 is located at index ${numLocation}`);

// function findNumberLocation(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// var numberList = [111, 11, 1, 111, 1111, 11, 11, 111, 1, 111];
// var targetNumber = 1111;
// var numLocation = findNumberLocation(numberList, targetNumber);
// console.log(`${targetNumber} is located at index ${numLocation}`);

// function greeting(name) {
//   return `Hello ${name}`;
// }
// greeting("Tom");

// function greeting(name) {
//   return `Hello ${name}`;
// }
// console.log(greeting("Tommy"));

// function cmToMeter(cm) {
//   var m = cm * 0.01;
//   return `${cm} cm is ${m} meter `;
// }

// console.log(cmToMeter(100));

// function cmToKilometer(cm) {
//   var km = cm * 0.00001;
//   return `${cm} cm is ${km} kilometer`;
// }

// console.log(cmToKilometer(100000)); // Output: 100000 cm is 1 kilometer

// function cmToMillimeter(cm) {
//   var mm = cm * 10;
//   return `${cm} cm is ${mm} millimeter`;
// }

// console.log(cmToMillimeter(5)); // Output: 5 cm is 50 millimeter

// var guests = ["Kimberly", "Olivia", "Sophia", "Catriona", "Michele"];
// guests.forEach(function (name) {
//   console.log(`To : ${name}`);
// });

// var guests = ["Kimberly", "Olivia", "Sophia", "Catriona", "Michele"];

// guests.forEach((name) => {
//   console.log(`To : ${name}`);
// });



//buat anggka random yang berisi angka acak    dari 0-9
let random = Math.floor(Math.random() * 10);

// Array adjectives (kata sifat)
let adjectives = [
  "happy",
  "fast",
  "brave",
  "smart",
  "strong",
  "bright",
  "cool",
  "silent",
  "kind",
  "sharp",
];

// Array nouns (kata benda)
let nouns = [
  "tiger",
  "mountain",
  "river",
  "storm",
  "tree",
  "lion",
  "cloud",
  "rock",
  "ocean",
  "fire",
];

// Array symbols
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Deklarasi variabel
let newUsername;
let newPassword;

// Function generate
function generate(option) {
  let random = Math.floor(Math.random() * 10);

  if (option === 1) {
    newUsername = adjectives[random] + nouns[random];
    console.log("Generated Username:", newUsername);
  } else if (option === 2) {
    newPassword =
      adjectives[random].toUpperCase() +
      nouns[random] +
      random +
      symbols[random];
    console.log("Generated Password:", newPassword);
  } else {
    console.log("Option tidak valid. Gunakan 1 untuk username atau 2 untuk password.");
  }
}

// Step 3: Buat userOption dan ulangi hingga valid
let userOption;
do {
  userOption = parseInt(prompt("Pilih opsi:\n1. Generate Username\n2. Generate Password"));
} while (userOption !== 1 && userOption !== 2);

// Panggil function generate dengan pilihan user
generate(userOption);
