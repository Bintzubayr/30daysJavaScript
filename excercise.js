let challenge = '30 Days Of JavaScript'
console.log(challenge)

console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())

let string = "JavaScript"
console.log(string.substr(4,6))

let string = "30 Days Of JavaScript"
console.log(string.substr(2,19))

let string = "30 Days Of JavaScript"
console.log(string.includes('script'))
console.log(string.includes('Script'))

console.log(string.split())
console.log(string.split(''))

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','))

let string = "30 Days Of JavaScript"
console.log(string.replace("JavaScript", "Python"))
console.log(string.charAt(15))
console.log(string.charAt(0))
console.log(string.charAt("J"))
console.log(string.indexOf('J'))

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex))
console.log(string.indexOf('3'))

let string = "You cannot end a sentence with because because because is a conjunction"
console.log(string.indexOf('Y'))

let string = "You cannot end a sentence with because because because is a conjunction"
let lastIndex = string.lastIndexOf('because');
console.log(lastIndex);

let string = "You cannot end a sentence with because because because is a conjunction";
console.log(string.indexOf('because'));
console.log(string.indexOf('You'));

let stringWithSpaces = ' 30 Days Of JavaScript ';
console.log(stringWithSpaces.trim()); 

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

alert('Welcome to 30DaysOfJavaScript')

prompt('required text', 'optional text')

let number = prompt('Enter number', 'number goes here')
console.log(number)

const agree = confirm('Are you sure you like to delete? ')
console.log(agree)

const now = new Date()
console.log(now.getDay())

const now = new Date()
console.log(now.getHours()) 

const now = new Date()
console.log(now.getMinutes())

const now = new Date()
console.log(now.getSeconds())

const now = new Date()
console.log(now.getFullYear())

const now = new Date() //
console.log(now.getTime())

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//3 is a negative number

let num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
//-3 is a negative number

let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
//0 is zero

// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}
//Go out freely.

let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}
//It might be cold, you need a jacket.

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
//You need a rain coat.












































