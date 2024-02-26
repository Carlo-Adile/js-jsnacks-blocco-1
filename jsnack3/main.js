/* made with for loop */
let sum = 0;
for (index = 0; index < 10; index++){
  
  let number = prompt("add a number");
  let addNumb = parseFloat(number);
  sum += addNumb;
  console.log(sum)
}