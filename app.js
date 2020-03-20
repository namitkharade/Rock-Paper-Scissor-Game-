let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(letter){
  if (letter === 'r') return "Rock"
  if (letter === 'p') return "Paper"
  if (letter === 's') return "Scissor"
}

function win(user,comp) {
  userScore++
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUser = '(user)'.fontsize(3).sub();
  const smallComp = '(comp)'.fontsize(3).sub();
  result_p.innerHTML = `${convert(user)}${smallUser}  beats  ${convert(comp)}${smallComp} You win 🔥`
  document.getElementById(user).classList.add('green-glow');
  setTimeout(()=> document.getElementById(user).classList.remove('green-glow'), 500)
}

function lose(user,comp) {
  compScore++
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUser = '(user)'.fontsize(3).sub();
  const smallComp = '(comp)'.fontsize(3).sub();
  result_p.innerHTML = `${convert(user)}${smallUser}  loses to  ${convert(comp)}${smallComp} You lost 💩`
  document.getElementById(user).classList.add('red-glow');
  setTimeout(()=> document.getElementById(user).classList.remove('red-glow'), 500)
}

function draw(user,comp) {
  const smallUser = '(user)'.fontsize(3).sub();
  const smallComp = '(comp)'.fontsize(3).sub();
  result_p.innerHTML = `${convert(user)}${smallUser}  equals  ${convert(comp)}${smallComp} Its a Draw  `
  document.getElementById(user).classList.add('grey-glow');
  setTimeout(()=> document.getElementById(user).classList.remove('grey-glow'), 500)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
        win(userChoice , computerChoice);
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        lose(userChoice , computerChoice);
        break;
      case 'rr':
      case 'pp':
      case 'ss':
        draw(userChoice , computerChoice);
        break;
      }
}

function main() {
rock_div.addEventListener('click',()=> game('r') );

paper_div.addEventListener('click',()=> game('p') );

scissors_div.addEventListener('click',()=> game('s') );
}

main();
