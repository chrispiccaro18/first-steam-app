import loadUserDisplay from './user-display-component.js';
import user from '../data/user.js';
import './search-component.js';
import { readIDFromHash } from './hash-query.js';
import { makeURLFromID } from './url-for-api.js';

// http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A74835CC435349DFEECF607F8BAA5834&steamids=76561198087595919

window.addEventListener('hashchange', () => {
    const id = readIDFromHash(window.location.hash.slice(1));
    const idURL = makeURLFromID(id);

    fetch(idURL)
        .then(response => response.json())
        .then(body => console.log(body));
});