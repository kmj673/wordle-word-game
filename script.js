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
  let regex = /[shard]/gi;
  let globalResult = userWord.match(regex);
  globalResult.reduce((acc, current) => {
    for(let i=0;)
  },[]);
  let firstRegex = /s..../;
  let secondRegex = /.h.../;
  let thirdRegex = /..a../;
  let fourthRegex = /...r./;
  let fifthRegex = /....d/;
  let regexes = [firstRegex, secondRegex, thirdRegex, fourthRegex, fifthRegex];
  let result = regexes.map((element) => userWord.match(element));
  let same = result.every((el) => el !== null);
  let aFew = result.some((el) => el === null);
  if (same) {
    keyboards.forEach((keyboard) => {
      if (userWord.includes(keyboard.textContent)) {
        keyboard.classList.add("green");
      }
    });
  } else if (aFew) {
    let correctLetter = [];
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== null) {
        correctLetter.push(userWord[i]);
      }
    }
    keyboards.forEach((keyboard) => {
      if (correctLetter.includes(keyboard.textContent)) {
        keyboard.classList.add("green");
      } else if (globalResult.includes(keyboard.textContent)) {
        keyboard.classList.add("yellow");
      }
    });
  }
}

//   will use regex to compare words and get the different alpahbet to apply the color feedback to the keyboard

submitButton.addEventListener("click", () => {
  let word = handleSubmit();
  compareWord(word);
});
