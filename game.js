function playGame(playerMove){

    const computerMove = pickcomputerMove();

       result = '';

       if (playerMove === 'scissors'){
          if(computerMove === 'rock'){
             result = 'you lose'
          }else if(computerMove === 'paper'){
             result ='you win'
          }else if(computerMove === 'scissors'){
             result ='tie'
          }
       }else if(playerMove === 'paper'){
          if(computerMove === 'rock'){
             result = 'win'
          }else if(computerMove === 'paper'){
             result ='tie'
          }else if(computerMove === 'scissors'){
             result ='you lose'
          }
       }else if(playerMove === 'rock'){
          if(computerMove === 'rock'){
             result = 'tie'
          }else if(computerMove === 'paper'){
             result ='you lose'
          }else if(computerMove === 'scissors'){
             result ='you win'
          }
       }
         
          alert(`you ${playerMove} scissors computer picked ${computerMove} ${result}`)
   }           


      function pickcomputerMove(){
       let computerMove ='';
       const randomNumber = Math.random();
   if(randomNumber >0 && randomNumber < 1/3){
   computerMove = 'rock';
   }else if(randomNumber > 1/3 && randomNumber < 2/3){
   computerMove = 'paper';
   }else if (randomNumber > 2/3 && randomNumber <1 ){
   computerMove = 'scissors';
   }
   return computerMove;
      }
     