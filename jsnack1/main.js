let first = prompt("write a number")
let second = prompt("write one more number")

const userPrompt = [];

userPrompt.push(first)
userPrompt.push(second)

console.log(userPrompt)

let biggerNumb = 0;

for(index = 0; index < userPrompt.length; index++){
  
  if(userPrompt[index] > biggerNumb){
    biggerNumb = userPrompt[index]
  }
  
}

console.log("the biggest numb is: " + biggerNumb)