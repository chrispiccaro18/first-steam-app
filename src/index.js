import loadUserDisplay from './user-display-component.js';
import './search-component.js';
import { readIDFromHash } from './hash-query.js';
import { makeURLFromID, makeURLForGames } from './url-for-api.js';
import loadGameList from './games-list-component.js';

window.addEventListener('hashchange', () => {
    const id = readIDFromHash(window.location.hash.slice(1));
    const idURL = makeURLFromID(id);
    const gamesURL = makeURLForGames(id);

    fetch(idURL)
        .then(response => response.json())
        .then(body => loadUserDisplay(body.response.players[0]));
    
    fetch(gamesURL)
        .then(response => response.json())
        .then(body => loadGameList(body.response.games));
});