/* Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

let userNumb = prompt("add a number to check the cubic value")

let isNumb = parseFloat(userNumb)

/* console.log("the cube value is " + (isNumb * isNumb)) */

/* version 2 */

if (isNaN(isNumb) == false){
  alert("the cube value of your number is " + (isNumb ** 3))
  let showThis = isNumb;
  let showNumb = document.querySelector('.literally_cube');
  showNumb.append(showThis)
}
else{
  alert("invalid input, try again")
}

