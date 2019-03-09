const test = QUnit.test;

QUnit.module('Make games list');

function makeGameItem() {
    return /*html*/ `
        <li>
            <div>
                <img class="title-div" src="http://media.steampowered.com/steamcommunity/public/images/apps/22380/1711fd8c46d739feec76bd4a64eaeeca5b87e3a7.jpg" alt="Fallout: New Vegas icon">
                <h2 class="title-div">Fallout: New Vegas</h2>
            </div>
            <p>Total playtime: 5 hours 13 minutes</p>
            <img src="http://media.steampowered.com/steamcommunity/public/images/apps/22380/1a52975c043227184162627285e4bc0c83216e02.jpg" alt="Fallout: New Vegas logo">
        </li>
    `;
}

test('make game list item', assert => {
    // arrange
    const expected = /*html*/ `
        <li>
            <div>
                <img class="title-div" src="http://media.steampowered.com/steamcommunity/public/images/apps/22380/1711fd8c46d739feec76bd4a64eaeeca5b87e3a7.jpg" alt="Fallout: New Vegas icon">
                <h2 class="title-div">Fallout: New Vegas</h2>
            </div>
            <p>Total playtime: 5 hours 13 minutes</p>
            <img src="http://media.steampowered.com/steamcommunity/public/images/apps/22380/1a52975c043227184162627285e4bc0c83216e02.jpg" alt="Fallout: New Vegas logo">
        </li>
    `;
    // act
    const result = makeGameItem();
    // assert
    assert.equal(result, expected);
});