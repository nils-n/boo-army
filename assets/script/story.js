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

// When runButton is clicked, hide diningRoomModal and show escapeModal
door2Button.addEventListener('click', function() {
    // Hide the haunted mansion modal
    hauntedMansionModal.style.display = 'none';
    // Show the basement modal
    basementModal.style.display = 'block';
});

