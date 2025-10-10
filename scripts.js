
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
        console.log(" Both equal ! ")
    }
    else if(UChoice ==='R' && MChoice === "Paper"){
        MScore++;
        console.log("Oh, Machine wins this hand !")
    }
    else if(UChoice ==='R' && MChoice === "Scissors"){
        UScore++;
        console.log("Oh, you win this hand !")
    }
    else if(UChoice ==='P' && MChoice === "Paper"){
        console.log(" Both equal ! ")
    }
    else if(UChoice ==='P' && MChoice === "Scissors"){
        MScore++;
        console.log("Oh, Machine wins this hand !")
    }
    else if(UChoice ==='P' && MChoice === "Rock"){
        UScore++;
        console.log("Oh, you win this hand !")
    }
    else if(UChoice ==='S' && MChoice === "Rock"){
        MScore++;
        console.log("Oh, Machine wins this hand !")
    }
    else if(UChoice ==='S' && MChoice === "Paper"){
        UScore++;
        console.log("Oh, you win this hand !")
    }
    else if(UChoice ==='S' && MChoice === "Scissors"){
        console.log(" Both equal ! ")

    }
}