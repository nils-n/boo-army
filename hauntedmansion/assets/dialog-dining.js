console.log("well hello there from the dining room");

const diningOption1Button = document.getElementById("dining-option-1");
const diningOption2Button = document.getElementById("dining-option-2");
const diningOption3Button = document.getElementById("dining-option-3");
const diningEndGameButton = document.getElementById("dining-end-game");
const diningOptionHeader = document.getElementById("dining-dialog-header");

// When diningButton is clicked, hide defendModal and show diningModal
diningOption1Button.addEventListener("click", function () {
  console.log("dining - Option 1 chosen");

  diningOptionHeader.innerText = `As you open the left door, a shadowy figure emerges, whispering, "Join me in eternal darkness."
   Before you can react, a shroud of darkness envelops you, 
   and your existence fades into nothingness..
     

        The End.`;

  // make two options invisiuble and show the end game option
  diningOption1Button.classList.add("d-none");
  diningOption2Button.classList.add("d-none");
  diningOption3Button.classList.add("d-none");
  diningEndGameButton.classList.remove("d-none");
});

// When diningButton is clicked, hide defendModal and show diningModal
diningOption2Button.addEventListener("click", function () {
  console.log("dining - Option 2 chosen");
  window.location.href = "basement.html";
});

// When diningButton is clicked, hide defendModal and show diningModal
diningEndGameButton.addEventListener("click", function () {
  console.log("dining - End Game chosen");
  window.location.href = "../";
});

// When diningButton is clicked, hide defendModal and show diningModal
diningOption3Button.addEventListener("click", function () {
  console.log("dining - Option 1 chosen");

  diningOptionHeader.innerText = `Opting for the right door, you find yourself in a room with a haunting music box. It guides you to a hidden door in the back, leading to a kitchen. The possessed silverware approaches, but they can't enter the kitchen. 
  Desperate, you find an old cellar door,  escape, and leave the sinister silverware behind. Your heart races, but you're still alive
       
  
          The End.`;

  // make two options invisiuble and show the end game option
  diningOption1Button.classList.add("d-none");
  diningOption2Button.classList.add("d-none");
  diningOption3Button.classList.add("d-none");
  diningEndGameButton.classList.remove("d-none");
});
