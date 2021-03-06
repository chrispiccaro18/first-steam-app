import { makeURLFromID, makeURLForGames } from '../src/url-for-api.js';

const test = QUnit.test;

QUnit.module('Given the search options return url for api fetch');

test('given id return url for fetch of user', assert => {
    // arrange
    const id = '76561198087595919';
    const expected = 'https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A74835CC435349DFEECF607F8BAA5834&steamids=76561198087595919';
    // act
    const result = makeURLFromID(id);
    // assert
    assert.equal(result, expected);
});

test('given id return url for fetch of user\'s owned games', assert => {
    // arrange
    const id = '76561197960434622';
    const expected = 'https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=A74835CC435349DFEECF607F8BAA5834&steamid=76561197960434622&include_appinfo=1&format=json';
    // act
    const result = makeURLForGames(id);
    // assert
    assert.equal(result, expected);
});