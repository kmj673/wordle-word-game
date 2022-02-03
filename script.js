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
  if (userWord === todayWord) {
    console.log("correnct");
  } else {
    console.log("not correnct");
  }

  //   will use regex to compare words and get the different alpahbet to apply the color feedback to the keyboard
}

submitButton.addEventListener("click", () => {
  let word = handleSubmit();
  compareWord(word);
});
