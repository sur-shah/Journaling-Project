// script.js

// Function to show the modal
function showModal() {
    document.getElementById('music-modal').style.display = 'flex';
}

// Function to hide the modal and set the selected genre
function selectGenre(genre) {
    document.getElementById('music-modal').style.display = 'none';
    alert('You selected ' + genre + ' music!');
    // You can add more functionality here, such as starting the music or updating the UI
}

document.getElementById('change-music-button').addEventListener('click', function() {
    showModal();
});

// Show the modal when the page loads
window.onload = showModal;
