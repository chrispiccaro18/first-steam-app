export function makeGameItem(game) {
    const html = /*html*/ `
        <li>
            <div>
                <img class="title-div" src="http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg" alt="${game.name} icon">
                <h2 class="title-div">${game.name}</h2>
            </div>
            <p>Total playtime: ${convertMinutes(game.playtime_forever)}</p>
            <img class="logo" src="http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg" alt="${game.name} logo">
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function convertMinutes(playtime) {
    if(playtime > 60) {
        const hours = Math.floor(playtime / 60);
        if(playtime % 60 === 0) {
            return `${hours} ${hours > 1 ? 'hours' : 'hour'}`;
        }
        const minutes = playtime % 60;
        return `${hours} ${hours > 1 ? 'hours' : 'hour'} ${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`;
    } else if(playtime){
        return `${playtime} ${playtime > 1 ? 'minutes' : 'minute'}`;
    } else {
        return 'never played';
    }
}

const userGamesDisplay = document.getElementById('steam-user-games-display');

export default function loadGameList(games) {
    while(userGamesDisplay.children.length > 0) {
        userGamesDisplay.lastElementChild.remove();
    }
    games.forEach(game => {
        const dom = makeGameItem(game);
        userGamesDisplay.appendChild(dom);
    });
}