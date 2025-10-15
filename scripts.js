let UScore = 0;
let MScore = 0;
let EqScore = 0;
document.getElementById("rock").addEventListener("click", function () {
  UChoice = "rock";
  let CRand = Math.floor(Math.random() * 3);
  let MChoice = CRand == 0 ? "rock" : CRand == 1 ? "paper" : "scissors";
  Play(UChoice, MChoice);
});

document.getElementById("paper").addEventListener("click", function () {
  UChoice = "paper";
  let CRand = Math.floor(Math.random() * 3);
  let MChoice = CRand == 0 ? "rock" : CRand == 1 ? "paper" : "scissors";
  Play(UChoice, MChoice);
});

document.getElementById("scissors").addEventListener("click", function () {
  UChoice = "scissors";
  let CRand = Math.floor(Math.random() * 3);
  let MChoice = CRand == 0 ? "rock" : CRand == 1 ? "paper" : "scissors";
  Play(UChoice, MChoice);
});
function Play(UChoice, MChoice) {
  if (UChoice ===  MChoice) {
    EqScore++;
    console.log("Tie!");
  } else if (
    (UChoice == "rock" && MChoice == "scissors") ||
    (UChoice == "paper" && MChoice == "rock") ||
    (UChoice == "scissors" && MChoice == "paper")
  ) {
    UScore++;
    console.log("user won ! ");
  } else {
    MScore++;
    console.log("machine won!");
  }
  const score = document.createElement('div');
score.className ="score";
score.textContent = `your score : ${UScore}\n machine score : ${MScore} Tie hands :${EqScore}` ;

document.body.appendChild(score);
  if (UScore >= 5 || MScore>=5) {
    if (UScore > MScore) {
      console.log("Congratssss ! \n" + "You won the game.");
      score.textContent = "You won the game ."

    } else {
      console.log("Machine won the game ! \n" + "Try again.");
      score.textContent = "oh! you lost"

    }
  console.log(
    "You won " +
      UScore +
      " hands, machine won " +
      MScore +
      " hands and " +
      EqScore +
      " were ties ."
  );  
  
}


}
