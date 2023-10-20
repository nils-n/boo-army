// variables
const rules = document.querySelector(".rules");
const close = document.querySelector(".close");
const settingButton = document.querySelectorAll(".settings-button");
const rulesLink = document.querySelector("#rules-link");
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector(".cross");
const rulesClosingBtn = document.querySelector(".rule-close-btn");
const backgroundSound = document.querySelector(".backgroundsound");
const clickSoundBtns = document.querySelectorAll(".btn-click-sound");
const btnSound = document.querySelector(".btn-sound");

// functions

// Background Music
backgroundSound.play();

// Rules //
function rulesList() {
  rules.classList.remove("hidden");
}
// Close button
function closeRules() {
  rules.classList.add("hidden");
}

// Escape button function
function closingEscape(e) {
  if (e.key === "Escape") {
    closeInstruction();
  }
}

// Navbar toggling
const navbarShow = function () {
  navbar.classList.remove("hiding");
  menu.classList.add("hidden");
  closeBtn.classList.remove("hidden");
};
const navbarHide = function () {
  navbar.classList.add("hiding");
  menu.classList.remove("hidden");
  closeBtn.classList.add("hidden");
};
navbarHide();

const rulesHide = () => rules.classList.add("visibility");
const rulesShow = () => rules.classList.remove("visibility");
rulesLink.addEventListener("click", rulesShow);
rulesClosingBtn.addEventListener("click", rulesHide);
menu.addEventListener("click", navbarShow);
closeBtn.addEventListener("click", navbarHide);

// Footer Pull-up feature

document.querySelector(".close").addEventListener("click", () => {
  console.log("clicked");
});
document.querySelector(".pull").addEventListener("click", () => {
  const footerContainer = document.querySelector(".footer-container");
  footerContainer.classList.toggle("hidden");

  if (footerContainer.classList.contains("hidden")) {
    document.querySelector(".pull").innerHTML = "PULL UP ⬆";
    document.querySelector("footer").style = "margin-top: 0px";
  } else {
    document.querySelector(".pull").innerHTML = "PUSH DOWN ⬇";
    document.querySelector("footer").style = "margin-top: -88px";
  }
});

// Making sound effect for all btns
clickSoundBtns.forEach((allbtns) =>
  allbtns.addEventListener("click", () => btnSound.play())
);
