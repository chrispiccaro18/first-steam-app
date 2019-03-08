import loadUserDisplay from './user-display-component.js';
import user from '../data/user.js';
import './search-component.js';

// http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A74835CC435349DFEECF607F8BAA5834&steamids=76561198087595919

loadUserDisplay(user);

console.log(window.location.hash.slice(1));