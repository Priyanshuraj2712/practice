"use strict";//treat all js code as newer version

let age = 18
let name = "priyanshu"
let isLogin = false 

/*
number
bigint
boolean
null = standalone value // type is object
undefined = value is not assigned
symbol = for uniqueness
object
*/
// console.log(typeof(age));

let score = "33"
// console.log(typeof(score));

let valInnum = Number(score)
// console.log(typeof(valInnum));

// "33" => 33
//"33abc" => NaN

let isLogin1 = 1
let boolIslog = Boolean(isLogin1)
// console.log(boolIslog);

let isString = ""
let boolIsstring = Boolean(isString)
// console.log(boolIsstring);

/*
1 => true
"" => false
"anything" => true
*/

//Operations
let value = 3
let negvalue = -value
// console.log(negvalue);

let str1 = "Hello"
let str2 = " Priyanshu"
let str = str1 + str2
// console.log(str);

// console.log("1"+2)//12
// console.log(1+"2") //12
// console.log("1"+2+2) //122
// console.log(1+2+"2") //32

// console.log(+true) //1

//Comparison
// console.log("2">1)
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
// console.log(undefined>0)
// console.log(undefined==0)
// console.log(undefined>=0)
// console.log("2"===1) //Strictly check with the datatype


//*******************************Memory Concept */
//primitive datatypes's varibale goes to stack and non-primitive(referrence)'s variable goes to heap memory
let var1 = "name"
let var2 = var1 //In this the copy of var1 is assigned to var not the complete value of var1

function myfunc(){
    email : "a@gmail"
    upi : "a@ybl"
}

let var3 = myfunc // in this refrencence of the function is give to the var3