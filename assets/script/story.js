const door2Button = document.getElementById('door2-button');
const door1Button = document.getElementById('door1-button');
const hauntedMansionModal = document.getElementById('haunted-mansion-modal');
const basementModal = document.getElementById('basement-modal');
const diningRoomModal = document.getElementById('dining-room-modal');
const runButton = document.getElementById('run-button');
const defendButton = document.getElementById('defend-button');
const reasonButton = document.getElementById('reason-button');
const escapeModal = document.getElementById('escape-modal');


door2Button.addEventListener('click', function() {
    // Hide the haunted mansion modal
    hauntedMansionModal.style.display = 'none';
    // Show the basement modal
    basementModal.style.display = 'block';
});

door1Button.addEventListener("click", function() {
    hauntedMansionModal.style.display = 'none';
    diningRoomModal.style.display = 'block';
});

runButton.addEventListener('click', function() {
    diningRoomModal.style.display = 'none';
    escapeModal.style.display = 'block';
});
