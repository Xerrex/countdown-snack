const rps_game = ()=>{
    let pScore = 0
    let cScore = 0

    const start_match = ()=>{
        const playBtn =  document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut')
            matchScreen.classList.add('fadeIn')
        });
    };

    // Play match
    const play_match = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img'); 

        hands.forEach((hand)=>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];


        options.forEach((option)=>{
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random()* 3);
                const computerChoice = computerOptions[computerNumber];
                

                setTimeout(()=>{
                      // compare the played hands
                    compareHands(this.textContent, computerChoice);
                    //Update the Images
                    
                    //TODO: RotateY 180deg scissors for computer

                    //TODO: RotateX for player paper
                    //TODO: ROtateX and Y for computer  paper
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                 // add animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                
                 //reset 180deg rotation of scissors
                if(this.textContent === 'scissors'){
                    //TODO: make sure that this reset is not undone
                    playerHand.classList.add('reset_Y_rotate');
                }
                
            });
        }); 
    };

    // Compare hands
    const compareHands = (playerChoice, computerChoice)=>{
        // winner text
        const winner =  document.querySelector('.winner');

        //check title
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        //check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                // Rock  crushes scissors
                winner.textContent = 'You Win';
                pScore++;
                updatescore();
                return;
            }else{
                //paper covers rock
                winner.textContent = 'The Computer wins';
                cScore++;
                updatescore();
                return;
            }
        }

        // check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                //   paper covers rock
                winner.textContent = 'You Win';
                pScore++;
                updatescore();
                return;
            }else{
                //scissors cut paper
                winner.textContent = 'The Computer wins';
                cScore++;
                updatescore();
                return;
            }
        }

        //check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                // scissors  cut paper
                winner.textContent = 'You Win';
                pScore++;
                updatescore();
                return;
            }else{
                //Rock crushes scissors 
                winner.textContent = 'The Computer wins';
                cScore++;
                updatescore();
                return;
            }
        }

    };

    const updatescore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p')

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    // Call all functions
    start_match();
    play_match();
};

rps_game();
