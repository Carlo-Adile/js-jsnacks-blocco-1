/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

let addNumb = prompt("add a 4 figure number")
/* let isNumb = parseInt(addNumb); */


let allFigure = [];
let allFigureSum = 0;

if(addNumb.length = 4){
  console.log(addNumb)
  console.log(addNumb.length)

  for(index = 0; index < addNumb.length; index++){
    /* console.log(allFigure.length[index]) */
    /* let addThisFigure = addNumb.length[index];
    console.log(addThisFigure) */


    /* allFigure.push(allFigure.length[index]); */
    allFigure.push(+addNumb[index]);

    allFigureSum = allFigureSum + allFigure[index];
    
    
  }
}
/* else{
  alert("that was not a 4 figure number")
} */

console.log(allFigure)
console.log("the sum is: " + allFigureSum)


/* 
const numbers = 1234567654321;
const str = numbers.toString();
let results = [];

for (let i = 0; i <= str.length; i++) {
  results.push(+str[i]);
}
console.log(results);
 */