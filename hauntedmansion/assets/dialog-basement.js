console.log("well hello there");

const basementContainer = document.getElementById("dialog-container");
const basementOption1Button = document.getElementById("basement-option-1");
const basementOption2Button = document.getElementById("basement-option-2");
const basementOption3Button = document.getElementById("basement-option-3");
const basementEndGameButton = document.getElementById("basement-end-game");
const basementOptionHeader = document.getElementById("basement-dialog-header");

// When basementButton is clicked, hide defendModal and show basementModal
basementOption1Button.addEventListener("click", function () {
  console.log("Basement - Option 1 chosen");

  basementOptionHeader.innerText = `You see the gruesome zombies walking towards you...`;

  // make two options invisiuble and show the end game option
  basementContainer.classList.add("d-none");
  basementOption1Button.classList.add("d-none");
  basementOption2Button.classList.add("d-none");
  basementEndGameButton.classList.remove("d-none");
});

// When basementButton is clicked, hide defendModal and show basementModal
basementOption2Button.addEventListener("click", function () {
  console.log("Basement - Option 2 chosen");
  window.location.href = "dining.html";
});

// When basementButton is clicked, hide defendModal and show basementModal
basementOption3Button.addEventListener("click", function () {
  console.log("Basement - Option 2 chosen");
  window.location.href = "dining.html";
});

// When basementButton is clicked, hide defendModal and show basementModal
basementEndGameButton.addEventListener("click", function () {
  console.log("Basement - End Game chosen");
  window.location.href = "../";
});
