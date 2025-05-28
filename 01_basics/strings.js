const vaname = "Priyanshu"
const count = 12

//console.log(`My name is ${vaname.toUpperCase()} and count is ${count}`)//String interpolation It created the placeholders

const ganame = new String('Hi-Priyanshu-pc')//it creates an string object which gives us more methods and prototype And out string is divides in indexes and starting from 0->P and so on 
console.log(ganame)
console.log(ganame.length)
const newStr = ganame.substring(0,6)
console.log(newStr);

const anstr = ganame.slice(-9,11)
console.log(anstr);

const url = 'https.google%23.com'
console.log(url.replace("%23",""))

console.log(url.includes("gol"));

console.log(ganame.split("-"))