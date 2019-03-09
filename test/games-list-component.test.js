import { makeGameItem, convertMinutes } from '../src/games-list-component.js';

const test = QUnit.test;

QUnit.module('Make games list');

const game = {
    'appid': 22380,
    'name': 'Fallout: New Vegas',
    'playtime_forever': 313,
    'img_icon_url': '1711fd8c46d739feec76bd4a64eaeeca5b87e3a7',
    'img_logo_url': '1a52975c043227184162627285e4bc0c83216e02',
    'has_community_visible_stats': true
};

test('make game list item', assert => {
    // arrange
    const expected = /*html*/ `
        <li>
            <div>
                <img class="title-div" src="http://media.steampowered.com/steamcommunity/public/images/apps/22380/1711fd8c46d739feec76bd4a64eaeeca5b87e3a7.jpg" alt="Fallout: New Vegas icon">
                <h2 class="title-div">Fallout: New Vegas</h2>
            </div>
            <p>Total playtime: 5 hours 13 minutes</p>
            <img class="logo" src="http://media.steampowered.com/steamcommunity/public/images/apps/22380/1a52975c043227184162627285e4bc0c83216e02.jpg" alt="Fallout: New Vegas logo">
        </li>
    `;
    // act
    const result = makeGameItem(game);
    // assert
    assert.htmlEqual(result, expected);
});

test('convert 120 minutes of playtime to 2 hours', assert => {
    // arrange
    const playtime = 120;
    const expected = '2 hours';
    // act
    const result = convertMinutes(playtime);
    // assert
    assert.equal(result, expected);
});

test('convert 63 minutes of playtime to hours and minutes', assert => {
    // arrange
    const playtime = 63;
    const expected = '1 hour 3 minutes';
    // act
    const result = convertMinutes(playtime);
    // assert
    assert.equal(result, expected);
});

test('convert 20 minutes of playtime string', assert => {
    // arrange
    const playtime = 20;
    const expected = '20 minutes';
    // act
    const result = convertMinutes(playtime);
    // assert
    assert.equal(result, expected);
});

test('convert 0 minutes of playtime to never played', assert => {
    // arrange
    const playtime = 0;
    const expected = 'never played';
    // act
    const result = convertMinutes(playtime);
    // assert
    assert.equal(result, expected);
});

test('convert 1 minute of playtime to string', assert => {
    // arrange
    const playtime = 1;
    const expected = '1 minute';
    // act
    const result = convertMinutes(playtime);
    // assert
    assert.equal(result, expected);
});