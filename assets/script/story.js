const door2Button = document.getElementById('door2-button');
const hauntedMansionModal = document.getElementById('haunted-mansion-modal');
const basementModal = document.getElementById('basement-modal');

door2Button.addEventListener('click', function() {
    // Hide the haunted mansion modal
    hauntedMansionModal.style.display = 'none';
    // Show the basement modal
    basementModal.style.display = 'block';
});