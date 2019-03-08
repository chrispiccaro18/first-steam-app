const test = QUnit.test;

QUnit.module('Create user display');

function makeUserDisplay() {
    return /*html*/ `
        <article>
            <p>
                Steam name:
                <a href="https://steamcommunity.com/profiles/76561198087595919/">
                    chrispiccaro18
                </a>
            </p>
            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/72/72789abfbdf55ae8e229c9782c871d8a90bb783b_full.jpg" alt="Avatar of chrispiccaro18">
        </article>
    `;
}

test('create template', assert => {
    // arrange
    const expected = /*html*/ `
        <article>
            <p>
                Steam name:
                <a href="https://steamcommunity.com/profiles/76561198087595919/">
                    chrispiccaro18
                </a>
            </p>
            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/72/72789abfbdf55ae8e229c9782c871d8a90bb783b_full.jpg" alt="Avatar of chrispiccaro18">
        </article>
    `;
    // act
    const result = makeUserDisplay();
    // assert
    assert.equal(result, expected);
});