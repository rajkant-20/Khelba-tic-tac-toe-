let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msgCont = document.querySelector(".winMsgCont");
let winningMsg = document.querySelector("#winMsg");

let turnO = true;

const winPattern = [
  [2, 4, 6],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
];

var count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      count++;
    } else {
      box.innerText = "X";
      turnO = true;
      count++;
    }
    box.disabled = true;

    checkWinner();
  });
});

disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

showWinner = (winner) => {
  winningMsg.innerText = `The winner is ${winner}, just scroll down and see!`;
  msgCont.classList.remove("hide");
  disableBoxes();
};

drawMsg = () => {
  if (count === 9) {
    console.log(count);
    winningMsg.innerText =
      "Draw ho gya, but kisi stree ke sath khel rhe hain toh aap hi haar maan lijiye! Jada pe pe mat kariye";
    msgCont.classList.remove("hide");
  }
};

const checkWinner = () => {
  let winFound = false;
  for (let pattern of winPattern) {
    pos1Val = boxes[pattern[0]].innerText;
    pos2Val = boxes[pattern[1]].innerText;
    pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos1Val === pos3Val) {
        showWinner(pos2Val);
        winFound = true;
        break;
      }
    }
  }
  if (!winFound && count === 9) {
    drawMsg();
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgCont.classList.add("hide");
  count = 0;
};

rstBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
