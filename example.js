// let number='lsd'
// console.log(parseInt(number))
// console.log(Number(number))
// // let checkNumber= Number.isNaN(number);
// // console.log(checkNumber)

// let pos=1
// let neg=-1

// console.log(isFinite(pos))
// console.log(isFinite(neg))

// const num=21.51
// console.log(num.toFixed())

// const number1=1
// const number2=2

// console.log(typeof(number1+number2))
// console.log(typeof(number1-number2))
// console.log(typeof(number1*number2))
// console.log(typeof(number1/number2))
// console.log(typeof(number1%number2))

// // console.log(Math)
// function generateRandomNumber(){
//     let random=Math.random();
//     console.log(Math.round(random));
// }
// generateRandomNumber();

// console.log(Math.max())
 
//String

let number='123'
console.log(typeof +'123');//add + will give the value of number

const name='Aditya';
const greet='Heyy';

console.log(`${greet}`);//template string

//1st way
let greeting = greet + ',' + name;

console.log(`${greet + ',' + name}`); //template string

let message = "Hello";
console.log(message[2]);
console.log(message.charAt(2));

message[0]="B";
console.log(message);//indexing 

console.log(message.split(2));//split method

console.log(message.toLocaleUpperCase()) //local upper case

const language="javascript"
console.log(language.substr(4,6));//Substr is different from substring
console.log(language.substring(4,6));//substring
console.log(language.slice(4,6));//slicing it has 3 index
// console.log(language.trim());//trim method
// console.log(language.trimStart());//trim start method
// console.log(language.indexOf('a'));//indexof method
// console.log(language.lastIndexOf('a'));//lastindex method

