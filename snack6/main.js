/* Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

let userNumb = prompt("add a number to check the cubic value")

let isNumb = parseFloat(userNumb)

/* console.log("the cube value is " + (isNumb * isNumb)) */

/* version 2 */

if (isNaN(isNumb) == false){
  console.log("the cube value is " + (isNumb * isNumb))
}
else{
  console.log("invalid number, try again")
}