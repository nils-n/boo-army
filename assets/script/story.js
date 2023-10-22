//DOM variables
const door2Button = document.getElementById('door2-button');
const door1Button = document.getElementById('door1-button');
const hauntedMansionModal = document.getElementById('haunted-mansion-modal');
const basementModal = document.getElementById('basement-modal');
const diningRoomModal = document.getElementById('dining-room-modal');
const runButton = document.getElementById('run-button');
const defendButton = document.getElementById('defend-button');
const reasonButton = document.getElementById('reason-button');
const escapeModal = document.getElementById('escape-modal');
const defendModal = document.getElementById('defend-modal');
const basementButton = document.getElementById('basement-button');
const reasonModal = document.getElementById('reason-modal');
const reasonBasementButton = document.getElementById('reasonToBasementButton');
const hallwayButton = document.getElementById('hallway-button');

// Add event listeners to buttons

// When door2Button is clicked, hide hauntedMansionModal and show basementModal
door2Button.addEventListener('click', function() {
    hauntedMansionModal.style.display = 'none';
    basementModal.style.display = 'block';
});

// When door1Button is clicked, hide hauntedMansionModal and show diningRoomModal
door1Button.addEventListener("click", function() {
    hauntedMansionModal.style.display = 'none';
    diningRoomModal.style.display = 'block';
});

// When runButton is clicked, hide diningRoomModal and show escapeModal
runButton.addEventListener('click', function() {
    diningRoomModal.style.display = 'none';
    escapeModal.style.display = 'block';
});

// When defendButton is clicked, hide diningRoomModal and show defendModal
defendButton.addEventListener('click', function() {
    diningRoomModal.style.display = 'none';
    defendModal.style.display = 'block';
})

// When basementButton is clicked, hide defendModal and show basementModal
basementButton.addEventListener('click', function() {
    defendModal.style.display = 'none';
    basementModal.style.display = 'block';
});

// When reasonButton is clicked, hide diningRoomModal and show reasonModal
reasonButton.addEventListener('click', function() {
    diningRoomModal.style.display = 'none';
    reasonModal.style.display = 'block';
})

// When reasonBasementButton is clicked, hide reasonModal and show basementModal
reasonBasementButton.addEventListener('click', function() {
    reasonModal.style.display = 'none';
    basementModal.style.display = 'block';
});