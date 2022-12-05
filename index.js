const billInput = document.getElementById("bill");
const buttons = document.querySelectorAll(".btn");
const numOfPeople = document.getElementById("numofpeople");
const customPersent = document.getElementById("cuscus");
const tipAmount = document.getElementById("tipamount");
const totalAmount = document.getElementById("total");
const erorDiv = document.querySelector(".erordiv");
const auF = document.getElementById("auF");
const fivePercent = document.getElementById("five");
const resetBtn = document.getElementById("reset");

let persentValue;
const calcTip = (e) => {
  if (numOfPeople.value === "0") {
    auF.classList.add("can");
    numOfPeople.classList.add("redline");
    return;
  }
  auF.classList.remove("can");
  numOfPeople.classList.remove("redline");
  let tip, total;
  if (e.target.className == "btn" || e.target.className == "cus") {
    persentValue = e.target.value;
    tip = (e.target.value * billInput.value) / 100 / numOfPeople.value;
    total = billInput.value / numOfPeople.value + tip;
  } else if (e.target.id == "numofpeople") {
    console.log(persentValue);
    tip = (persentValue * billInput.value) / 100 / e.target.value;
    total = billInput.value / e.target.value + tip;
  }
  if (!isFinite(tip) || isNaN(tip)) {
    tipAmount.innerText = "$" + 0;
    totalAmount.innerText = "$" + 0;
    return;
  }
  tipAmount.innerText = "$" + tip.toFixed(1);
  totalAmount.innerText = "$" + total.toFixed(1);
};

// for (let button of buttons) {
//   button.addEventListener("click", calcTip);
// }
buttons.forEach((button) => {
  button.addEventListener("click", calcTip);
});

resetBtn.addEventListener("click", function () {
  billInput.value = "";
  numOfPeople.value = "";
  tipAmount.innerText = "$" + 0;
  totalAmount.innerText = "$" + 0;
});

numOfPeople.addEventListener("keyup", calcTip);
customPersent.addEventListener("keyup", calcTip);
