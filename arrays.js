//array = store multiple values in a variable
//js array is resizable
//not accessed by arbitary string
const myarr = [1,2,3,4,5]
const myarr2 = new Array("A","b","c")
// console.log(myarr[0]);
myarr2.push(3)//add is last
// console.log(myarr2);
myarr2.pop()//delete at last
// console.log(myarr2);
myarr.unshift(2)//adds in start, not prefereable as all the values of array has shifts
// console.log(myarr);
myarr.shift()//delete at start
// console.log(myarr);

// console.log(myarr.includes(6))
// console.log(myarr.indexOf(6))
const newarr = myarr.join()//join binds the array and convert into string
// console.log(myarr)
// console.log(newarr)
// console.log(typeof newarr)

// console.log("A ",myarr)
const myn1 = myarr.slice(1,3)//it give the copy of the section and but donot include the end index of the given range
// console.log(myn1)
// console.log("B ",myarr)

const myn2 = myarr.splice(1,3)//it cuts the section of the given array and creates a new array of the given range and in the original array the value after the given range is left only
// console.log(myn2)
// console.log("C",myarr)

const mh = ['thor','ironman','spiderman']
const dh = ['batman','flash','superman']

// mh.push(dh)//it adds the dh array like an element, so it creates a type os nested array or like a single elment
// console.log(mh)
// console.log(mh[3][2])//for accessing the elment of the other array we have to do that

// const allh = mh.concat(dh)//it add 2 or more array and returns a new array
// console.log(allh)

const allnh = [...mh,...dh]//... is spread operator it basically treats all elements as individual
// console.log(allnh)

const anarr = [1,2,3,[4,5],6,[4,5,[5,6,7],8],6]//it makes a single array among all the nested array and infinity is depth
const newarrr = anarr.flat(Infinity)
// console.log(newarrr)

console.log(Array.isArray("Priyanshu"))
console.log(Array.from("Priyanshu"))
console.log(Array.from({gname:"Priyanshu"}))//it return a blank array because it will not convert this because key have to define that we want the array from the keu or value

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))