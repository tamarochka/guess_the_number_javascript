
var name = prompt("Hi! What is your name?");
if (confirm("Want to play a game," +name+"?")) {
    var randomnumber=Math.floor(Math.random()*11);
    var userNumber = prompt(name + ", could you guess a number from 1 to 10?")
    while(userNumber != randomnumber){
      if(userNumber > randomnumber){
        var userNumber = prompt(name + ", your number is too big. Want to try one more time?")
      } else {

        var userNumber = prompt(name + ", your number is too small. Want to try one more time?")
      }
    }
    alert("Yay! You won!")
} else {
    alert("Too bad ...bye!")
}
