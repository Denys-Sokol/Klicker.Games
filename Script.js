let timeLeft = 10;
let score = 0;
let timer;

const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');
const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

function startGame() {
  button.disabled = false;
  score = 0;
  scoreDisplay.textContent = score;
  message.textContent = "";
  timeLeft = 10;
  timeDisplay.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      button.disabled = true;
      message.textContent = `Время вышло! Ты набрал ${score} очков.`;
    }
  }, 1000);
}

button.addEventListener('click', () => {
  if (timeLeft === 10 && score === 0) {
    startGame();
  }
  score++;
  scoreDisplay.textContent = score;
});
