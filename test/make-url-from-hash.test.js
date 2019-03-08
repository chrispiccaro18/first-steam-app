import { makeURLFromID } from '../src/url-for-api.js';

const test = QUnit.test;

QUnit.module('Given the search options return url for api fetch');

test('given id return url for fetch of user', assert => {
    // arrange
    const id = '76561198087595919';
    const expected = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A74835CC435349DFEECF607F8BAA5834&steamids=76561198087595919';
    // act
    const result = makeURLFromID(id);
    // assert
    assert.equal(result, expected);
});