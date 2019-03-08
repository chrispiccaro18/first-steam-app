export function makeUserDisplay(user) {
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

function clearDisplay() {
    while(steamUserDisplay.children.length > 0) {
        steamUserDisplay.lastElementChild.remove();
    }
}
const steamUserDisplay = document.getElementById('steam-user-display');

export default function loadUserDisplay(user) {
    clearDisplay();    
    const dom = makeUserDisplay(user);
    steamUserDisplay.appendChild(dom);
}