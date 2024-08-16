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

const UNSPLASH_API_KEY = 'UjwSd2HverocUpFhzxw33RW7YhU1QgTnXFJpWTObB_Y';

function fetchImages(query) {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_API_KEY}&per_page=3`)
        .then(response => response.json())
        .then(data => displayBackgroundOptions(data.results))
        .catch(error => console.error('Error fetching images:', error));
}

function displayBackgroundOptions(images){
    const backgroundOptions = document.getElementById('background-options');
    backgroundOptions.innerHTML = '';
    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = image.urls.small;
        imageElement.alt = image.alt_description;
        imgElement.onclick = () => setBackground(image.urls.full);
        backgroundOptions.appendChild(imgElement);
    });
}

function setBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
}


document.getElementById('search-background').addEventListener('click', function() {
    const query = document.getElementById('background-search').value;
    if (query) {
        fetchImages(query);
    }
});

document.getElementById('refresh-background').addEventListener('click', function() {
    const query = document.getElementById('background-search').value;
    if (query) {
        fetchImages(query);
    }
});



// Show the modal when the page loads
window.onload = showModal;
