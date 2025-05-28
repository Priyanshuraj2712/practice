const accountId = 121
let accountName = "Hello"
var accountCity = "Jaipur"
accountState = "Haryana"
let accountBranch;
//accountId = 12 // Not redeclare or re update
console.log(accountId);

console.table([accountId,accountName,accountCity,accountState,accountBranch])
/*
prefer to use let instead of var because of block scope and function scope
*/
