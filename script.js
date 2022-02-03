"use strict";
const keyboards = document.querySelectorAll("kbd");
const letterContainer = document.querySelector(".letter-container");
const submitButton = document.querySelector("button");
const todayWord = "shard";

function handleKey(event) {
  return event.target.textContent;
}
function handleLetter(key) {
  let letter = document.createElement("span");
  letter.textContent = key;
  letterContainer.appendChild(letter);
}

keyboards.forEach((keyboard) => {
  keyboard.addEventListener("click", (event) => {
    let clickedKey = handleKey(event);
    handleLetter(clickedKey);
  });
});

function handleSubmit() {
  let letters = letterContainer.querySelectorAll("span");
  let lettersArr = [];
  letters.forEach((letter) => {
    lettersArr.push(letter.textContent);
  });
  let word = lettersArr.join("");
  return word;
}

function compareWord(userWord) {
  let firstRegex = /s..../;
  let secondRegex = /.h.../;
  let thirdRegex = /..a../;
  let fourthRegex = /...r./;
  let fifthRegex = /....d/;
  let regexes = [firstRegex, secondRegex, thirdRegex, fourthRegex, fifthRegex];
  let result = regexes.map((element) => userWord.match(element));
  let same = result.every((el) => el !== null);
  let notAtAll = result.every((el) => el === null);
  let aFew = result.some((el) => el === null);
  console.log(notAtAll, aFew);
  if (same) {
    keyboards.forEach((keyboard) => {
      if (userWord.includes(keyboard.textContent)) {
        keyboard.classList.add("green");
      }
    });
  }
}

//   will use regex to compare words and get the different alpahbet to apply the color feedback to the keyboard

submitButton.addEventListener("click", () => {
  let word = handleSubmit();
  compareWord(word);
});
