const test = QUnit.test;

QUnit.module('Given the search options return url for api fetch');

const BASE_URL = 'http://api.steampowered.com';
const USER_URL = `${BASE_URL}/ISteamUser/GetPlayerSummaries/v0002/`;
const API_KEY = 'A74835CC435349DFEECF607F8BAA5834';

function makeURLFromID(id) {
    const url = new URL(USER_URL);
    url.searchParams.set('key', API_KEY);
    url.searchParams.set('steamids', id);
    return url.toString();
}

//key and steamids

test('given id return url for fetch of user', assert => {
    // arrange
    const id = '76561198087595919';
    const expected = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A74835CC435349DFEECF607F8BAA5834&steamids=76561198087595919';
    // act
    const result = makeURLFromID(id);
    // assert
    assert.equal(result, expected);
});