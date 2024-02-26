/* Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

let oddNumbs = [];

for (index = 0; index < 6; index++){
  let addNumb = prompt("add a number, odd numbers will be stored");
  if(addNumb % 2 !== 0){
    oddNumbs.push(addNumb);
  }
  else{
    console.log(addNumb + " was an even number")
  }
}
console.log("your final collection of odd numbers is: " + oddNumbs)