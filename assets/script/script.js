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
const soundon = document.querySelector("#sound-on");
// functions

// Background Music
const soundonmusic = () => {
if (backgroundSound.paused) {
backgroundSound.play();
soundon.innerHTML =
'<i class="fa fa-music" aria-hidden="true"></i> Play Music ';
} else {
backgroundSound.pause();
soundon.innerHTML =
' <i class="fa fa-stop" aria-hidden="true"></i> Stop Music ';
}
};

// setInterval(soundonmusic, 6000);

soundon.addEventListener("click", soundonmusic);

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

const rulesHide = () => {
rules.classList.add("visibility");
console.log("asim");
};
const rulesShow = () => {
rules.classList.remove("visibility");
console.log("asim");
};
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

/*! JS Bat by Eric Grange - https://www.delphitools.info/2013/10/30/pimp-your-website-with-an-halloween-bat/ */
/* THIS CODE IS MODIFIED AND THE FUNCTION IS CALLED FEW TIMES TO ENSURE THAT THE BATS ARE MULTIPLE  */
const bat = function () {
  var r = Math.random,
  n = 0,
  d = document,
  w = window,
  i = d.createElement("img"),
  z = d.createElement("div"),
  zs = z.style,
  a = w.innerWidth * r(),
  b = w.innerHeight * r();
  zs.position = "fixed";
  zs.left = 0;
  zs.top = 0;
  zs.opacity = 0;
  z.appendChild(i);
  i.src =
  "data:image/gif;base64,R0lGODlhMAAwAJECAAAAAEJCQv///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQACACwAAAAAMAAwAAACdpSPqcvtD6NcYNpbr4Z5ewV0UvhRohOe5UE+6cq0carCgpzQuM3ut16zvRBAH+/XKQ6PvaQyCFs+mbnWlEq0FrGi15XZJSmxP8OTRj4DyWY1lKdmV8fyLL3eXOPn6D3f6BcoOEhYaHiImKi4yNjo+AgZKTl5WAAAIfkECQEAAgAsAAAAADAAMAAAAnyUj6nL7Q+jdCDWicF9G1vdeWICao05ciUVpkrZIqjLwCdI16s+5wfck+F8JOBiR/zZZAJk0mAsDp/KIHRKvVqb2KxTu/Vdvt/nGFs2V5Bpta3tBcKp8m5WWL/z5PpbtH/0B/iyNGh4iJiouMjY6PgIGSk5SVlpeYmZqVkAACH5BAkBAAIALAAAAAAwADAAAAJhlI+py+0Po5y02ouz3rz7D4biSJbmiabq6gCs4B5AvM7GTKv4buby7vsAbT9gZ4h0JYmZpXO4YEKeVCk0QkVUlw+uYovE8ibgaVBSLm1Pa3W194rL5/S6/Y7P6/f8vp9SAAAh+QQJAQACACwAAAAAMAAwAAACZZSPqcvtD6OctNqLs968+w+G4kiW5omm6ooALeCusAHHclyzQs3rOz9jAXuqIRFlPJ6SQWRSaIQOpUBqtfjEZpfMJqmrHIFtpbGze2ZywWu0aUwWEbfiZvQdD4sXuWUj7gPos1EAACH5BAkBAAIALAAAAAAwADAAAAJrlI+py+0Po5y02ouz3rz7D4ZiCIxUaU4Amjrr+rDg+7ojXTdyh+e7kPP0egjabGg0EIVImHLJa6KaUam1aqVynNNsUvPTQjO/J84cFA3RzlaJO2495TF63Y7P6/f8vv8PGCg4SFhoeIg4UQAAIfkEBQEAAgAsAAAAADAAMAAAAnaUj6nL7Q+jXGDaW6+GeXsFdFL4UaITnuVBPunKtHGqwoKc0LjN7rdes70QQB/v1ykOj72kMghbPpm51pRKtBaxoteV2SUpsT/Dk0Y+A8lmNZSnZlfH8iy93lzj5+g93+gXKDhIWGh4iJiouMjY6PgIGSk5eVgAADs=";
  d.body.appendChild(z);
  function R(o, m) {
  return Math.max(Math.min(o + (r() - 0.5) * 400, m - 50), 50);
  }
  function A() {
  var x = R(a, w.innerWidth),
  y = R(b, w.innerHeight),
  d = 5 * Math.sqrt((a - x) * (a - x) + (b - y) * (b - y));
  zs.opacity = n;
  n = 1;
  zs.transition = zs.webkitTransition = d / 1e3 + "s linear";
  zs.transform = zs.webkitTransform = "translate(" + x + "px," + y + "px)";
  i.style.transform = i.style.webkitTransform = a > x ? "" : "scaleX(-1)";
  a = x;
  b = y;
  setTimeout(A, d);
  }
  setTimeout(A, r() * 3e3);
  };
  bat();
  bat();
  bat();
  bat();
  bat();
  bat();
  bat();
  bat();
  bat();
  bat();
  bat();
// END OF BATS CODE

