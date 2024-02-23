/* versione 1 */
const guestList = ["fabio", "artur", "giuliano"]

let guestName = prompt("who are you? write your name")

for(index =0; index < guestList.length; index++){
  if(guestName === guestList[index]){
    console.log("you can enter")
    break;
  }
  else{
    console.log("you can't enter")
  }
}

