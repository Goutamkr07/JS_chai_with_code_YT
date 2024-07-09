const accountId = 1443355  //way of defining a constant variable
let accountEmail = "goutam@google.com" //most common way to define variable 
var accountPassword = "1234" // old way of defining variable
accountCity = "Jaipur" // This define the variable type dinamically / while compiling // not a good way to practice 
let accountState;


// accountId = 2 // not allowed

accountEmail = "hitesh@gmail.com"
accountPassword = "1234567890"
accountCity = "Jamshedpur"

/*
prefer not to use var
Because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail,accountPassword, accountCity, accountState]) // It display output in tabular format