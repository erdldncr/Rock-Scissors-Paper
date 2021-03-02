function game(){
  var userInput=prompt("Enter your choice \"scissor\",\"paper\",\"rock\"");
  var choices=["scissor","paper","rock"]
  var computerChoice=choices[Math.floor((Math.random()*3))]
  console.log(choices)
  console.log(computerChoice)
  switch(userInput){
      case "scissor": 
      if(computerChoice==choices[1]){
          console.log("You won")
      }else if(computerChoice==choices[0]){
          console.log("It is drawing try again")
          game()
      }else{
           console.log("You lost");
       }
         break;
      case "paper": 
      if(computerChoice==choices[0]) {
          console.log("You lost")
      }else if(computerChoice==choices[1]) {
          console.log("It is drawing try again")
          game()
      } else{
          console.log("You lost")
      }
       break;
      case "rock":
      if (computerChoice==choices[1]) {
               console.log("You won")
           }else if (computerChoice==choices[2]) {
          console.log("It is drawing try again")
          game()
      }else{
          console.log("You won")
      }
       break;
       default:
          console.log("It is invalid try again")
          game()
  }
  }
  game()