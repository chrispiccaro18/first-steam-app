const test = QUnit.test;

QUnit.module('Create user display');

function makeUserDisplay(user) {
    const html = /*html*/ `
        <article>
            <p>
                Steam name:
                <a href="${user.profileurl}">
                    ${user.personaname}
                </a>
            </p>
            <img src="${user.avatarfull}" alt="Avatar of ${user.personaname}">
        </article>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('create template', assert => {
    // arrange
    const user = {
        'steamid': '76561198087595919',
        'communityvisibilitystate': 3,
        'profilestate': 1,
        'personaname': 'chrispiccaro18',
        'lastlogoff': 1552074821,
        'profileurl': 'https://steamcommunity.com/profiles/76561198087595919/',
        'avatar': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/72/72789abfbdf55ae8e229c9782c871d8a90bb783b.jpg',
        'avatarmedium': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/72/72789abfbdf55ae8e229c9782c871d8a90bb783b_medium.jpg',
        'avatarfull': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/72/72789abfbdf55ae8e229c9782c871d8a90bb783b_full.jpg',
        'personastate': 1,
        'primaryclanid': '103582791429521408',
        'timecreated': 1364623209,
        'personastateflags': 0
    };
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
    const result = makeUserDisplay(user);
    // assert
    assert.htmlEqual(result, expected);
});