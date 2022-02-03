const keyboards = document.querySelectorAll("kbd");

function handleKey(event) {
  console.log(event.target.textContent);
}

keyboards.forEach((keyboard) => {
  keyboard.addEventListener("click", handleKey);
});
