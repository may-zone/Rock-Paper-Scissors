
let UScore = 0;
let MScore = 0;
for (let i=0 ;i<5 ; i++){
let UChoice = prompt("Inter your choice : \n"+
                    "R as Rock \n"+
                    "P as Paper\n"+
                    "S as Scissors").toUpperCase();

let CRand = Math.floor(Math.random() * 3);
let MChoice ;
    if(CRand ==0){
         MChoice = "Rock"
    }
    else if (CRand ==1){
          MChoice = "Paper"
        }
    else{
          MChoice = "Scissors"
        }                 

    if(UChoice ==='R' && MChoice === "Rock"){
        alert(" Both equal ! ")
    }
    else if(UChoice ==='R' && MChoice === "Paper"){
        MScore++;
        alert("Oh, Machine wins this hand !")
    }
    else if(UChoice ==='R' && MChoice === "Scissors"){
        UScore++;
        alert("Oh, you win this hand !")
    }
    else if(UChoice ==='P' && MChoice === "Paper"){
        alert(" Both equal ! ")
    }
    else if(UChoice ==='P' && MChoice === "Scissors"){
        MScore++;
        alert("Oh, Machine wins this hand !")
    }
    else if(UChoice ==='P' && MChoice === "Rock"){
        UScore++;
        alert("Oh, you win this hand !")
    }
    else if(UChoice ==='S' && MChoice === "Rock"){
        MScore++;
        alert("Oh, Machine wins this hand !")
    }
    else if(UChoice ==='S' && MChoice === "Paper"){
        UScore++;
        alert("Oh, you win this hand !")
    }
    else if(UChoice ==='S' && MChoice === "Scissors"){
        alert(" Both equal ! ")

    }

}
    if(UScore > MScore){
        alert("Congratssss ! \n" +"You won the game.")
    }
    else{
        alert("Machine won the game ! \n" +"Try again.")
        
    }

alert("You win " +UScore+ " hands and machine win "+MScore+" hands.")