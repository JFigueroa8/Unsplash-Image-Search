const API_URL = `https://api.unsplash.com/search/photos?client_id=${add_your_api_key_here}&page=1&query=`;

export default {
    search(searchTerm) {
        const url = `${API_URL}${searchTerm}`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return data.results;
            })
    }
}