import { writeIDToHash } from './hash-query.js';

const steamIDSearch = document.getElementById('steam-id-search');
const steamIDInput = document.getElementById('steam-id-input');

steamIDSearch.addEventListener('submit', event => {
    event.preventDefault();

    const id = steamIDInput.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuerry = writeIDToHash(existingQuery, id);
    window.location.hash = newQuerry;
});