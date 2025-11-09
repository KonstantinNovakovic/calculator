let display = document.getElementById("output");
const buttons = document.querySelectorAll(".btn");
const oper = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

let num1 = "";
let num2 = "";
let flag = true;
let twiceOperandFlag = false;
let operand;
let equalTwiceinRow = false;

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}
const handleClick = (event) => {
  if (flag === false) {
    display.textContent = "";
    flag = true;
  }

  display.textContent += event.target.textContent;
  twiceOperandFlag = false;
  console.log(
    "num1:",
    num1,
    "num2:",
    num2,
    "operand:",
    operand,
    "display:",
    display.textContent,
    "twiceOperandFlag:",
    twiceOperandFlag
  );
};

const handleEqualsClick = (event) => {
  if (num1 === "" || operand === undefined) {
    return;
  }

  if (twiceOperandFlag === false && equalTwiceinRow === false) {
    num2 = display.textContent;

    display.textContent = operate(+num1, operand, +num2);
    num1 = "";
    flag = false;
    equalTwiceinRow = true;
  }
  console.log(
    "num1:",
    num1,
    "num2:",
    num2,
    "operand:",
    operand,
    "display:",
    display.textContent,
    "twiceOperandFlag:",
    twiceOperandFlag
  );
};

function handleClearClick(event) {
  display.textContent = "";
  num1 = "";
  num2 = "";
}

const handleOperClick = (event) => {
  if (twiceOperandFlag === false) {
    if (num1 != "") {
      num2 = display.textContent;

      display.textContent = operate(+num1, operand, +num2);
      operand = event.target.textContent;

      num1 = display.textContent;
      num2 = "";
      flag = false;
      console.log(
        "num1:",
        num1,
        "num2:",
        num2,
        "operand:",
        operand,
        "display:",
        display.textContent,
        "twiceOperandFlag:",
        twiceOperandFlag
      );
    } else {
      num1 = display.textContent;
      operand = event.target.textContent;
      flag = false;
      console.log(
        "num1:",
        num1,
        "num2:",
        num2,
        "operand:",
        operand,
        "display:",
        display.textContent,
        "twiceOperandFlag:",
        twiceOperandFlag
      );
    }
    twiceOperandFlag = true;
    equalTwiceinRow = false;
  } else {
    operand = event.target.textContent;
  }
};

clear.addEventListener("click", handleClearClick);
equal.addEventListener("click", handleEqualsClick);

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

oper.forEach((button) => {
  button.addEventListener("click", handleOperClick);
});
