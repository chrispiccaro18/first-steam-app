const BASE_URL = 'http://api.steampowered.com';
const USER_URL = `${BASE_URL}/ISteamUser/GetPlayerSummaries/v0002/`;
const API_KEY = 'A74835CC435349DFEECF607F8BAA5834';

export function makeURLFromID(id) {
    const url = new URL(USER_URL);
    url.searchParams.set('key', API_KEY);
    url.searchParams.set('steamids', id);
    return url.toString();
}