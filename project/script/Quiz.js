console.log('script.js loaded');

let theme = localStorage.getItem('theme') ?? 'WhiteMode';

document.addEventListener('DOMContentLoaded', () => {
    load();
});

function load() {
    // Habe ChatGPT gefragt, wie ich prüfen kann ob ein Element existiert/geladen ist
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../style/style.css';
    style.onload = () => {
        console.log('style.css loaded');
        loadDarkWhiteMode();
    };
    document.head.appendChild(style);



    loadNav();
    loadFooterBricks();
    socials = document.getElementsByClassName('socials')[0];
    loadFooterData();

}

/* Script start */

/************************************************/
/*************** Dark-, WhiteMode ***************/
/************************************************/

let root = document.querySelector(':root');

function loadDarkWhiteMode() {
    theme = localStorage.getItem('theme') ?? 'WhiteMode';

    if (theme === 'WhiteMode') {
        root.style.setProperty('--color', '#351829');
        root.style.setProperty('--lighter-color', '#7e3d64');
        root.style.setProperty('--secondary-color', '#fcd6e9');
        root.style.setProperty('--accent-color', '#d96cbf');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #fff4fa 0%, #fde0f0 50%, #fcd6e9 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #f4b4d7 0%, #f28ec4 50%, #fcb4dc 100%)');
        root.style.setProperty('--extra-highlight', '#f9abd7');
        root.style.setProperty('--invert', 'invert(0)');


        localStorage.setItem('theme', 'WhiteMode');

        document.getElementsByClassName('DarkWhiteMode')[0].innerHTML = 'DarkMode';
    } else if (theme === 'DarkMode') {
        root.style.setProperty('--color', '#fce4f1');
        root.style.setProperty('--lighter-color', '#cfa8c3');
        root.style.setProperty('--secondary-color', '#3a1c2f');
        root.style.setProperty('--accent-color', '#ff7eb9');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #1b0f1b 0%, #2a1a2e 50%, #1b0f1b 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #3a1c2f 0%, #5e2a4d 50%, #3a1c2f 100%)');
        root.style.setProperty('--extra-highlight', '#51213c');
        root.style.setProperty('--invert', 'invert(1)');


        localStorage.setItem('theme', 'DarkMode');

        document.getElementsByClassName('DarkWhiteMode')[0].innerHTML = 'WhiteMode';
    }
}

function changeDarkWhiteMode() {
    theme = localStorage.getItem('theme') ?? 'WhiteMode';

    if (theme === 'WhiteMode') {
        root.style.setProperty('--color', '#fce4f1');
        root.style.setProperty('--lighter-color', '#cfa8c3');
        root.style.setProperty('--secondary-color', '#3a1c2f');
        root.style.setProperty('--accent-color', '#ff7eb9');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #1b0f1b 0%, #2a1a2e 50%, #1b0f1b 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #3a1c2f 0%, #5e2a4d 50%, #3a1c2f 100%)');
        root.style.setProperty('--extra-highlight', '#51213c');
        root.style.setProperty('--invert', 'invert(1)');


        localStorage.setItem('theme', 'DarkMode');

        document.getElementsByClassName('DarkWhiteMode')[0].innerHTML = 'WhiteMode';
    } else if (theme === 'DarkMode') {
        root.style.setProperty('--color', '#351829');
        root.style.setProperty('--lighter-color', '#7e3d64');
        root.style.setProperty('--secondary-color', '#fcd6e9');
        root.style.setProperty('--accent-color', '#d96cbf');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #fff4fa 0%, #fde0f0 50%, #fcd6e9 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #f4b4d7 0%, #f28ec4 50%, #fcb4dc 100%)');
        root.style.setProperty('--extra-highlight', '#f9abd7');
        root.style.setProperty('--invert', 'invert(0)');


        localStorage.setItem('theme', 'WhiteMode');

        document.getElementsByClassName('DarkWhiteMode')[0].innerHTML = 'DarkMode';
    }
}

/************************************************/
/******** Dynamische Content Generierung ********/
/************************************************/

/****************** Navigation ******************/

let nav = document.querySelector('nav');

function loadNav() {
    nav.innerHTML = `
        <div class="logo"><img onclick="openLoginWindow()" class="loginGuy" src=".${MUST_HAVE_DATA.nav[1].link}"><a id="logo" href=".${MUST_HAVE_DATA.nav[0].link}">MindQuest</a></div>
        <div class="nav"></div>
    `;

    for (let i = 2; i < MUST_HAVE_DATA.nav.length - 2; i++) {
        document.getElementsByClassName('nav')[0].innerHTML += `
            <a href=".${MUST_HAVE_DATA.nav[i].link}">${MUST_HAVE_DATA.nav[i].name}</a>
        `;
    }
    document.getElementsByClassName('nav')[0].innerHTML += `
        <div class="DarkWhiteMode" onclick="${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 2].onclick}">${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 2].name}</div>`
    document.querySelector('nav').innerHTML += `<img class="respsonsiveImg" src=".${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 1].link}" onclick="openResponsiveNav()">`

    // LoginWindow
    if (true) {
        let loginWindow = document.getElementById('loginWindow');
        loginWindow.innerHTML += `
            <div class="blurryBackground">
                <div class="loginWindowContent">
                    <h2>${MUST_HAVE_DATA.loginWindow[0].name}</h2>
                    <div class="infoItem"></div>
                    ${MUST_HAVE_DATA.loginWindow[0].inputUsername}
                    ${MUST_HAVE_DATA.loginWindow[0].inputPassword}
                    <div>${MUST_HAVE_DATA.loginWindow[0].button}</div>
                    <div id="register"> 
                        <div id="noAccountInfo">${MUST_HAVE_DATA.loginWindow[0].info}</div>
                        <div id="noAccountButton" onclick="openRegisterWindow()">${MUST_HAVE_DATA.loginWindow[0].registerButton}</div>
                    </div>
                    <div id='closeButton' onclick='closeLoginWindow()'>${MUST_HAVE_DATA.loginWindow[0].closeButton}</div>
                </div>
            </div>`;

    }

    //RegisterWindow
    if (true) {
        let registerWindow = document.getElementById('registerWindow');
        registerWindow.innerHTML += `
        <div class="blurryBackground">
            <div class="registerWindowContent">
                <h2>${MUST_HAVE_DATA.registerWindow[0].name}</h2>
                <div class="infoItem"></div>
                ${MUST_HAVE_DATA.registerWindow[0].inputUsername}
                ${MUST_HAVE_DATA.registerWindow[0].inputPassword}
                ${MUST_HAVE_DATA.registerWindow[0].inputPasswordRepeat}
                <div onclick='register()'>${MUST_HAVE_DATA.registerWindow[0].button}</div>
                <div id="login">
                    <div id="haveAccountInfo">${MUST_HAVE_DATA.registerWindow[0].info}</div>
                    <div id="haveAccountButton" onclick="openLoginWindow()">${MUST_HAVE_DATA.registerWindow[0].loginButton}</div>
                </div>
                <div id='closeButton' onclick='closeRegisterWindow()'>${MUST_HAVE_DATA.registerWindow[0].closeButton}</div>
            </div>
        </div>`;
    }

    //Overview
    if (true) {

        let playerData = document.getElementsByClassName('playerData')[0];

        playerData.innerHTML = `
        <div class="blurryBackground">
            <div class="playerDataContent">
                <h1>Spielerprofil</h1>
                <div class="playerDataNav"><img  onclick="checkIfPlayerReallyWantsToLogout()" src="../media/Images/logoutICON.webp"><h1 class="closePlayerOverview" onclick="closePlayerOverview()">X</h1></div>
                <div class="playerDataInfos"></div>
                <div class="shopSlider"></div>
                <div class="playerDataGrid"> 
                    <div class="playerDataInventoryHeadline"><h3>Inventar</h3><div class="playerDataInventory"></div></div>
                    <div class="playerDataAchievementsHeadline"><h3>Erfolge</h3><div class="playerDataAchievements"></div></div>
                    <div class="playerDataQuestsHeadline"><h3>Quests</h3><div class="playerDataQuests"></div></div>
                </div>
            </div>
        </div>`;
    }
}

/******************** Footer ********************/

let footer = document.querySelector('footer');

function loadFooterBricks() {
    footer.innerHTML = `
        <div class="left">
            <div class="footerLogo"><a href="#">MindQuest</a></div>
            <div class="socials">
            </div>
        </div>
        <div class="right">
            <div class="ContactData">
            </div>
            <div class="ContactSocials">
            </div>
        </div>
        `;
}

let socials;

function loadFooterData() {
    for (let i = 0; i < MUST_HAVE_DATA.footer.length; i++) {
        switch (MUST_HAVE_DATA.footer[i].name) {
            case 'SocialButtons':
                for (let j = 0; j < MUST_HAVE_DATA.footer[i].Infos.length; j++) {
                    socials.innerHTML += `
                        <a href="${MUST_HAVE_DATA.footer[i].Infos[j].link}" target="_blank"><img src=".${MUST_HAVE_DATA.footer[i].Infos[j].imgSCR}"></a>
                    `;
                }
                break;
            case 'Kontakt':
                let contactData = document.getElementsByClassName('ContactData')[0];
                contactData.innerHTML = `<h3>Kontakt</h3><hr>`;
                for (let j = 0; j < MUST_HAVE_DATA.footer[i].Infos.length; j++) {
                    if (!MUST_HAVE_DATA.footer[i].Infos[j].link) {
                        contactData.innerHTML += `
                            <div class="contactNumber">${MUST_HAVE_DATA.footer[i].Infos[j].name}</div>
                     `;
                    } else {
                        contactData.innerHTML += `
                            <div><a href="${MUST_HAVE_DATA.footer[i].Infos[j].link}" target="_blank">${MUST_HAVE_DATA.footer[i].Infos[j].name}</a></div>
                     `;
                    }
                }
                break;
            case 'Socials':
                let contactSocials = document.getElementsByClassName('ContactSocials')[0];
                contactSocials.innerHTML = `<h3>Socials</h3><hr>`;
                for (let j = 0; j < MUST_HAVE_DATA.footer[i].Infos.length; j++) {
                    contactSocials.innerHTML += `
                        <div><a href="${MUST_HAVE_DATA.footer[i].Infos[j].link}" target="_blank">${MUST_HAVE_DATA.footer[i].Infos[j].name}</a></div>
                    `;
                }
                break;

        }
    }
}

function loadGameNavigation() {
    document.querySelector('nav').innerHTML = `
        <div class="">${MUST_HAVE_DATA.nav[0].name}</div>
    `
}



function startQuiz(type, level, difficulty) {
    if (!checkIfPlayerLoggedIn()) {
        openLoginWindow();
        return;

    }
    switch (type) {
        case 'flag':
            window.location.href = `./game.html?type=${type}&level=${level}&difficulty=${difficulty}`;
            break;
        case 'music':
            window.location.href = `./game.html?type=${type}&level=${difficulty}&difficulty=${level}`;
    }
}

function loadPlayerDataOverview() {

    console.log('PLAYER_DATA:', PLAYER_DATA);
    console.log('localStorage', JSON.parse(localStorage.getItem('loggedPlayer')))


    if (PLAYER_DATA.user.username == "" || PLAYER_DATA.user.username == undefined || PLAYER_DATA.user.username == null) {
        PLAYER_DATA = JSON.parse(localStorage.getItem('loggedPlayer'));

    }

    console.log(PLAYER_DATA)


    let playerDataInfos = document.getElementsByClassName('playerDataInfos')[0];
    let playerDataInventory = document.getElementsByClassName('playerDataInventory')[0];
    let playerDataAchievements = document.getElementsByClassName('playerDataAchievements')[0];
    let playerDataQuests = document.getElementsByClassName('playerDataQuests')[0];

    playerDataInfos.innerHTML = '';
    playerDataInventory.innerHTML = '';
    playerDataAchievements.innerHTML = '';
    playerDataQuests.innerHTML = '';

    playerDataInfos.innerHTML = `
        <div class="playerDataItem"><h3>Username:</h3><p>${PLAYER_DATA.user.username}</p></div>
        <div class="playerDataItem"><h3>Coins:</h3><p>${PLAYER_DATA.user.coins}</p></div>
        <div class="playerDataItem"><h3>Level:</h3><p>${PLAYER_DATA.user.level}</p></div>
        <div class="playerDataItem"><h3>XP:</h3><p>${Math.floor(PLAYER_DATA.user.XP)}/${PLAYER_DATA.user.XPToLevelUp}</p></div>
    `;
    console.log(PLAYER_DATA);

    for (let i = 0; i < PLAYER_DATA.user.inventory.length; i++) {
        playerDataInventory.innerHTML += `<div class="playerDataItemTwo"><p>${PLAYER_DATA.user.inventory[i].name} ${PLAYER_DATA.user.inventory[i].quantity}x</p></div>`;
    }

    for (let i = 0; i < PLAYER_DATA.user.achievements.length; i++) {
        playerDataAchievements.innerHTML += `<div class="playerDataItemTwo"><p>${PLAYER_DATA.user.achievements[i]}</p></div>`;
    }

    for (let i = 0; i < PLAYER_DATA.user.quests.length; i++) {
        playerDataQuests.innerHTML += `<div class="playerDataItemTwo"><p>${PLAYER_DATA.user.quests[i]}</p></div>`;
    }

    if (PLAYER_DATA.user.achievements.length == 0) {
        playerDataAchievements.innerHTML += `<div class="playerDataItemTwo"><p>Keine Erfolge</p></div>`;
    }

    if (PLAYER_DATA.user.inventory.length == 0) {
        playerDataInventory.innerHTML += `<div class="playerDataItemTwo"><p>Inventar ist leer</p></div>`;
    }

    if (PLAYER_DATA.user.quests.length == 0) {
        playerDataQuests.innerHTML += `<div class="playerDataItemTwo"><p>Keine Quests</p></div>`;
    }

    let playerData = document.getElementsByClassName('playerData')[0];

    playerData.style.display = 'block';
    setTimeout(() => { playerData.style.opacity = '1'; }, 10);
}