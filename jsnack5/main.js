/* Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

let oddNumbs = [];

for (index = 0; index < 6; index++){
  let addNumb = prompt("add a number, odd numbers will be stored");

  let canAdd = parseFloat(addNumb);
  
  
  if(canAdd % 2 !== 0 && isNaN(canAdd) == false){
    oddNumbs.push(addNumb);
  }
  else{
    console.log(canAdd + " didn't respect the requisite")
  }
}
console.log("your final collection of odd numbers is: " + oddNumbs + ". you stored a total of " + oddNumbs.length + " odd numbers")