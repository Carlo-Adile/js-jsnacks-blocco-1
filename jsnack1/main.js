let first = prompt("write a number")
let second = prompt("write one more number")

const userPrompt = [];

userPrompt.push(parseInt(first, 10))
userPrompt.push(parseInt(second, 10))

console.log(userPrompt)

let biggerNumb = 0;

for(index = 0; index < userPrompt.length; index++){
  
  if(userPrompt[index] > biggerNumb){
    biggerNumb = userPrompt[index]
  }
  
}

console.log("the biggest numb is: " + biggerNumb)


/* aggiungere più condizioni per comparare effettivamente i due prompt, e coprire i casi 1 > 2, 2 > 1, 1 = 2 */