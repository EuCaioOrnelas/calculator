const lastCalc = document.querySelector("#last-calc");
const result = document.querySelector("#result");
const button = document.querySelectorAll("#keyboard button");

class calculator {
  constructor(lastCalc, result) {
    this.lastCalc = lastCalc;
    this.result = result;
    this.currentOperation = "";
  }
  // add digit to calculator screen
  addDigit(digit) {
    this.lastCalc = digit;
    this.updateScreen();
  }

  //change values of the calculator screen
  updateScreen() {
    this.lastCalc.innerText += this.currentOperation;
  }
}

const calc = new calculator(lastCalc, result);

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      console.log("Op: " + value);
    }
  });
});
