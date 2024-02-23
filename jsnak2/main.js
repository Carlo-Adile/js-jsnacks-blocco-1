let firstWord = prompt("write the first word")
let secondWord = prompt("write the second word")

let firstLength = firstWord.length;
let secondLength = secondWord.length;
/* console.log(firstLength); */

if (firstWord.length > secondWord.length) {
  console.log("the shorter word is: " + firstWord)
}
else if (firstWord.length < secondWord.length) {
  console.log("the longer word is: " + secondWord)
}
else {
  console.log("both words are equally long")
}
