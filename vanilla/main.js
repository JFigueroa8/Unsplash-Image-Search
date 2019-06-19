const API_URL = `https://api.unsplash.com/search/photos?client_id=${add_your_api_key_here}&page=1&query=`;
const form = document.querySelector('form');
const input = document.querySelector('input');
const loadingImage = document.querySelector('#loadingImage');
const imageSection = document.querySelector('.images');

loadingImage.style.display = 'none';

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
    event.preventDefault();
    const searchTerm = input.value;
    
    searchStart();
    search(searchTerm)
        .then(displayImages)
        .then(() => {
            loadingImage.style.display = 'none';
        })
}

function searchStart() {
    imageSection.innerHTML = '';
    loadingImage.style.display = '';
}

function search(searchTerm) {
    const url = `${API_URL}${searchTerm}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.results;
        })
}

function displayImages(images) {
    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = image.urls.small;
        imageSection.appendChild(imageElement);
    });
}