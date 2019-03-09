const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://api.steampowered.com';
const USER_URL = `${BASE_URL}/ISteamUser/GetPlayerSummaries/v0002/`;
// http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=A74835CC435349DFEECF607F8BAA5834&steamid=76561197960434622&include_appinfo=1&format=json
const USER_GAMES_URL = `${BASE_URL}/IPlayerService/GetOwnedGames/v0001/`;
const API_KEY = 'A74835CC435349DFEECF607F8BAA5834';

// key and steamid, include_appinfo = 1 format = json

export function makeURLFromID(id) {
    const url = new URL(USER_URL);
    url.searchParams.set('key', API_KEY);
    url.searchParams.set('steamids', id);
    return url.toString();
}

export function makeURLForGames(id) {
    const url = new URL(USER_GAMES_URL);
    url.searchParams.set('key', API_KEY);
    url.searchParams.set('steamid', id);
    url.searchParams.set('include_appinfo', 1);
    url.searchParams.set('format', 'json');
    return url.toString();
}