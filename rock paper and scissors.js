const userChoice = prompt("enter a choise");

function computerChoice() {
  let random = Math.random();
  if (random < 0.35) {
    return "rock";
  } else if (random > 0.35 && random < 0.7) {
    return "paper";
  } else {
    return "scissors";
  }
}

function compair(choise1, choise2) {
  if (choise1 === choise2) {
    return "TIE";
  }
  if (choise1 === "rock") {
    if (choise2 === "scissors") {
      return "rock wins";
    } else {
      return "paper wins";
    }
  }
  if (choise1 === "paper") {
    if (choise2 === "rock") {
      return "paper wins";
    } else {
      if (choise2 === "scissors") {
        return "scissors wins";
      }
    }
  }
  if (choise1 === "scissor") {
    if (choise2 === "rock ") {
      return "rock wins";
    } else {
      if (choise2 === "paper") {
        return "paper wins";
      }
    }
  }
}

const playGame = () => {
  let choise1 = userChoice;
  let choise2 = computerChoice();
  console.log("your choice is :" + choise1);
  console.log("computer choice is :" + choise2);
  console.log(compair(choise1, choise2));
};

playGame();
