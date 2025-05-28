let d = new Date()
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toLocaleString());
// console.log(typeof d);

//let mydate = new Date(2025,4,28) //month will be starting from 0(jan)
// let mydate = new Date(2025,4,28, 16,53)
let mydate = new Date("05-28-2025")
// console.log(mydate.toLocaleString())

let mytimestamp = Date.now()
// console.log(Math.floor(mytimestamp/1000));
// console.log(mydate.getTime());//Returns the stored time value in milliseconds since midnight, January 1, 1970

console.log(d.getDate())
console.log(d.getDay())

console.log(mydate.toLocaleString('default',{
    weekday:"long"
}))