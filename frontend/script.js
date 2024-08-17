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
    console.log('Searching for:', query); // Log the query
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_API_KEY}&per_page=3`)
        .then(response => {
            console.log('Response:', response); // Log the raw response
            return response.json();
        })
        .then(data => {
            console.log('Data:', data); // Log the data returned by the API
            displayBackgroundOptions(data.results);
        })
        .catch(error => console.error('Error fetching images:', error));
}

function displayBackgroundOptions(images){
    const backgroundOptions = document.getElementById('background-options');
    backgroundOptions.innerHTML = '';
    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = image.urls.small;
        imageElement.alt = image.alt_description;
        imageElement.onclick = () => setBackground(image.urls.full);
        backgroundOptions.appendChild(imageElement);
    });
}

function setBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';

    const backgroundOptions = document.getElementById('background-options');
    backgroundOptions.innerHTML = '';
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

// Function to save the current journal entry
function saveEntry() {
    const textarea = document.querySelector('textarea');
    const entry = textarea.value.trim();

    if (entry) {
        let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        entries.push({ date: new Date().toLocaleString(), text: entry });
        localStorage.setItem('journalEntries', JSON.stringify(entries));
        textarea.value = '';  // Clear the textarea after saving
        alert('Journal entry saved!');
    } else {
        alert('Please write something before saving.');
    }
}

// Function to redirect to the previous entries page
function viewEntries() {
    window.location.href = 'entries.html'; // Redirect to the entries page
}

// Event listeners for the buttons
document.getElementById('save-entry').addEventListener('click', saveEntry);
document.getElementById('view-entries').addEventListener('click', viewEntries);




// Show the modal when the page loads
window.onload = showModal;
