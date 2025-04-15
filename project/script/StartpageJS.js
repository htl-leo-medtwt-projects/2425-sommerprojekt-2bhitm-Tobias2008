// Autor: Tobias Payreder

console.log('script.js loaded');

let theme = localStorage.getItem('theme') ?? 'WhiteMode';


document.addEventListener('DOMContentLoaded', () => {
    load();
});

function load() {
    // Habe ChatGPT gefragt, wie ich prüfen kann ob ein Element existiert/geladen ist
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './style/style.css';
    style.onload = () => {
        console.log('style.css loaded');
        loadDarkWhiteMode();
    };
    document.head.appendChild(style);



    loadNav();
    loadFooterBricks();
    socials = document.getElementsByClassName('socials')[0];
    loadFooterData();
    loadStartpageBricks();
    loadStartpageData();
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
        <div class="logo"><img onclick="openLoginWindow()" class="loginGuy" src="${MUST_HAVE_DATA.nav[1].link}"><a id="logo" href="${MUST_HAVE_DATA.nav[0].link}">MindQuest</a></div>
        <div class="nav"></div>
    `;

    for (let i = 2; i < MUST_HAVE_DATA.nav.length - 1; i++) {
        document.getElementsByClassName('nav')[0].innerHTML += `
            <a href="${MUST_HAVE_DATA.nav[i].link}">${MUST_HAVE_DATA.nav[i].name}</a>
        `;
    }
    document.getElementsByClassName('nav')[0].innerHTML += `
        <div class="DarkWhiteMode" onclick="${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 1].onclick}">${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 1].name}</div>`
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
                        <a href="${MUST_HAVE_DATA.footer[i].Infos[j].link}" target="_blank"><img src="${MUST_HAVE_DATA.footer[i].Infos[j].imgSCR}"></a>
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

/******************* Startpage ******************/

let startpage = document.getElementsByClassName('body')[0];


function loadStartpageBricks() {
    startpage.innerHTML = `
        <h1>MindQuest - interaktives Quiz mit Kategorien</h1>
        <h2>Verschiedene Quizzes</h2>
        <div class="overview"></div>
        <h2>Flaggenquiz</h2>
        <div class="flaggenquiz"></div>
        <h2>Länderquiz</h2>
        <div class="laenderquiz"></div>
        <h2>Musikquiz</h2>
        <div class="musikquiz"></div>
        <div class="bottomNav"></div>
        <div id="loginWindow"></div></div>
        <div id="registerWindow"></div></div>
        <div class="playerData"></div>
    `;
}

function loadStartpageData() {
    console.log('STARTPAGE_DATA:', STARTPAGE_DATA);



    // Overview
    if (true) {
        let overview = document.getElementsByClassName('overview')[0];
        if (typeof STARTPAGE_DATA !== 'undefined' && STARTPAGE_DATA.overview) {
            for (let i = 0; i < STARTPAGE_DATA.overview.length; i++) {
                overview.innerHTML += `
            <div class="flex">
                <img src="${STARTPAGE_DATA.overview[i].imgSRC}">
                <div>
                    <div class="gridHeadline">${STARTPAGE_DATA.overview[i].headline}</div>
                    <div class="gridText">${STARTPAGE_DATA.overview[i].information}</div>
                </div>
            </div>
        `;
            }
        }
    }

    //Flaggenquiz
    if (true) {
        let flaggenquiz = document.getElementsByClassName('flaggenquiz')[0];
        let brick = `<div class="flaggenquizInfos">`;
        for (let i = 0; i < STARTPAGE_DATA.flaggenquiz.length; i++) {
            brick += `
                <h3>${STARTPAGE_DATA.flaggenquiz[i].headline}</h3>
                <p>${STARTPAGE_DATA.flaggenquiz[i].information}</p>
        `;
        }
        brick += `</div>`;
        flaggenquiz.innerHTML = brick;
        flaggenquiz.innerHTML += `<img style="border-radius: 10px" src="${STARTPAGE_DATA.flaggenquiz[0].imgSRC}">`;

    }

    //Länderquiz
    if (true) {
        let laenderquiz = document.getElementsByClassName('laenderquiz')[0];

        for (let i = 0; i < STARTPAGE_DATA.laenderquiz.length; i++) {
            laenderquiz.innerHTML += `
            <div id="grid-${(i + 1).toString()}">  
            <img src="${STARTPAGE_DATA.laenderquiz[i].imgSRC}">
            <h3>${STARTPAGE_DATA.laenderquiz[i].headline}</h3>
            <p>${STARTPAGE_DATA.laenderquiz[i].information}</p>
            </div>
            `;
        }
    }

    //Musikquiz
    if (true) {
        let musikquiz = document.getElementsByClassName('musikquiz')[0];

        for (let i = 0; i < STARTPAGE_DATA.musikquiz.length; i++) {
            musikquiz.innerHTML += `
           <div class="musikinfoItem" id="musikinfoItem${i}" onclick="animateMusikQuizData(${i})"><div class="musikHeadline">${STARTPAGE_DATA.musikquiz[i].headline}</div>
        <div class="content"><p>${STARTPAGE_DATA.musikquiz[i].information}</p></div></div>
            `;
        }


    }

    //Bottomnav

    if (true) {
        let bottomNav = document.getElementsByClassName('bottomNav')[0];
        bottomNav.innerHTML = `<h1>Sonstiges...</h1>`;

        bottomNav.innerHTML += `
        <div class="bottomNavButtons">
            <a href="#">Back2Top</a>
            <a href="${MUST_HAVE_DATA.nav[2].link}">Spielerklärung</a>
            
        </div>
`;
    }

    //LoginWindow
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
}

function animateMusikQuizData(index) {
    let items = document.querySelectorAll('.musikinfoItem');

    items.forEach((item, i) => {
        let content = item.querySelector('.content');

        if (i === index) {
            let isExpanded = item.style.maxHeight === '27em';

            if (isExpanded) {
                item.style.maxHeight = '4em';
                item.style.padding = '1em';
                if (content) content.style.opacity = '0';
            } else {
                item.style.maxHeight = '27em';
                item.style.padding = '2em';
                item.onclick = () => animateMusikQuizData(index, -1);
                if (content) {
                    setTimeout(() => {
                        content.style.opacity = '1';
                    }, 300);
                }
            }
        } else {
            item.style.maxHeight = '4em';
            item.style.padding = '1em';
            let otherContent = item.querySelector('.content');
            if (otherContent) otherContent.style.opacity = '0';
        }
    });

}

/******************* Login *******************/

function openLoginWindow() {
    if (document.getElementById('registerWindow').style.display === 'block') {
        closeRegisterWindow();
    }

    if (JSON.parse(sessionStorage.getItem('login')) == true) {
        loadPlayerDataOverview();
        return;
    }

    let loginWindow = document.getElementById('loginWindow');
    loginWindow.style.display = 'block';

    setTimeout(() => { loginWindow.style.opacity = '1'; }, 10);
}

function closeLoginWindow() {
    let loginWindow = document.getElementById('loginWindow');
    loginWindow.style.opacity = '0';

    setTimeout(() => { loginWindow.style.display = 'none'; }, 300);
}

function login() {

    if (document.getElementById('usernameLogin').value == '' || document.getElementById('passwordLogin').value == '') {
        console.log('Bitte Username und Passwort eingeben!');
        document.getElementsByClassName('infoItem')[0].innerHTML = 'Bitte Username und Passwort eingeben!';
        document.getElementsByClassName('infoItem')[0].style.opacity = '1';
        document.getElementsByClassName('infoItem')[0].style.padding = '1rem';

        setTimeout(() => {
            document.getElementsByClassName('infoItem')[0].style.opacity = '0';
            document.getElementsByClassName('infoItem')[0].style.padding = '0';

            setTimeout(() => { document.getElementsByClassName('infoItem')[0].innerHTML = ''; }, 300);
        }, 3000);

        return;
    }

    let players = JSON.parse(localStorage.getItem('playerData')) ?? [];

    for (let i = 0; i < players.length; i++) {
        if (players[i].username == document.getElementById('usernameLogin').value && players[i].password == document.getElementById('passwordLogin').value) {
            console.log('Login erfolgreich!');
            PLAYER_DATA = players[i];
            sessionStorage.setItem('login', true);
            sessionStorage.setItem('loggedPlayer', JSON.stringify(PLAYER_DATA));

            document.getElementsByClassName('infoItem')[0].innerHTML = 'Login erfolgreich! - Willkommen ' + PLAYER_DATA.username + '!';
            document.getElementsByClassName('infoItem')[0].style.opacity = '1';
            document.getElementsByClassName('infoItem')[0].style.padding = '1rem';

            setTimeout(() => {
                document.getElementsByClassName('infoItem')[0].style.opacity = '0';
                document.getElementsByClassName('infoItem')[0].style.padding = '0';

                setTimeout(() => { document.getElementsByClassName('infoItem')[0].innerHTML = ''; }, 500);
            }, 1500);

            setTimeout(() => { closeLoginWindow(); }, 2000);

            return;
        } else if (players[i].username == document.getElementById('usernameLogin').value && players[i].password != document.getElementById('passwordLogin').value) {
            console.log('Login fehlgeschlagen! - falsches Passwort!');
            document.getElementsByClassName('infoItem')[0].innerHTML = 'Login fehlgeschlagen! - falsches Passwort!';
            document.getElementsByClassName('infoItem')[0].style.opacity = '1';
            document.getElementsByClassName('infoItem')[0].style.padding = '1rem';

            setTimeout(() => {
                document.getElementsByClassName('infoItem')[0].style.opacity = '0';
                document.getElementsByClassName('infoItem')[0].style.padding = '0';

                setTimeout(() => { document.getElementsByClassName('infoItem')[0].innerHTML = ''; }, 300);
            }, 3000);
            return;
        }
    }

    console.log('Login fehlgeschlagen! - kein Account gefunden!');
    document.getElementById('usernameLogin').focus();

    setTimeout(() => {
        document.getElementById('usernameLogin').value = '';
        document.getElementById('passwordLogin').value = '';
    }, 100);

    document.getElementsByClassName('infoItem')[0].innerHTML = 'Login fehlgeschlagen! - kein Account gefunden!';
    document.getElementsByClassName('infoItem')[0].style.opacity = '1';
    document.getElementsByClassName('infoItem')[0].style.padding = '1rem';

    setTimeout(() => {
        document.getElementsByClassName('infoItem')[0].style.opacity = '0';
        document.getElementsByClassName('infoItem')[0].style.padding = '0';

        setTimeout(() => { document.getElementsByClassName('infoItem')[0].innerHTML = ''; }, 300);
    }, 3000);
}

/***************** Register *******************/

function openRegisterWindow() {

    if (document.getElementById('loginWindow').style.display === 'block') {
        closeLoginWindow();
    }

    let registerWindow = document.getElementById('registerWindow');
    registerWindow.style.display = 'block';

    setTimeout(() => { registerWindow.style.opacity = '1'; }, 10);
}

function closeRegisterWindow() {
    let registerWindow = document.getElementById('registerWindow');
    registerWindow.style.opacity = '0';

    setTimeout(() => { registerWindow.style.display = 'none'; }, 300);
}

function register() {
    let players = JSON.parse(localStorage.getItem('playerData')) ?? [];

    if (document.getElementById('usernameRegister').value == '' || document.getElementById('passwordRegister').value == '') {
        console.log('Bitte Username und Passwort eingeben!');
        document.getElementsByClassName('infoItem')[1].style.opacity = '1';
        document.getElementsByClassName('infoItem')[1].style.padding = '1rem';
        document.getElementsByClassName('infoItem')[1].innerHTML = 'Bitte Username und Passwort eingeben!';

        setTimeout(() => {
            document.getElementsByClassName('infoItem')[1].style.opacity = '0';
            document.getElementsByClassName('infoItem')[1].style.padding = '0';

            setTimeout(() => { document.getElementsByClassName('infoItem')[1].innerHTML = ''; }, 300);
        }, 3000);
        document.getElementById('usernameRegister').focus();
        return;
    }

    if (document.getElementById('passwordRegister').value != document.getElementById('passwordRepeatRegister').value) {
        console.log('Passwörter stimmen nicht überein!');
        document.getElementsByClassName('infoItem')[1].style.opacity = '1';
        document.getElementsByClassName('infoItem')[1].style.padding = '1rem';
        document.getElementsByClassName('infoItem')[1].innerHTML = 'Passwörter stimmen nicht überein!';

        setTimeout(() => {
            document.getElementsByClassName('infoItem')[1].style.opacity = '0';
            document.getElementsByClassName('infoItem')[1].style.padding = '0';

            setTimeout(() => { document.getElementsByClassName('infoItem')[1].innerHTML = ''; }, 300);
        }, 3000);
        document.getElementById('passwordRegister').focus();

        return;
    }

    for (let i = 0; i < players.length; i++) {
        if (players[i].username == document.getElementById('usernameRegister').value) {
            console.log('Username bereits vergeben!');

            document.getElementsByClassName('infoItem')[1].style.opacity = '1';
            document.getElementsByClassName('infoItem')[1].style.padding = '1rem';
            document.getElementsByClassName('infoItem')[1].innerHTML = 'Username bereits vergeben!';

            setTimeout(() => {
                document.getElementsByClassName('infoItem')[1].style.opacity = '0';
                document.getElementsByClassName('infoItem')[1].style.padding = '0';

                setTimeout(() => { document.getElementsByClassName('infoItem')[1].innerHTML = ''; }, 300);
            }, 3000);
            document.getElementById('usernameRegister').focus();

            return;
        }
    }

    setTimeout(() => {
        PLAYER_DATA.username = document.getElementById('usernameRegister').value;
        PLAYER_DATA.password = document.getElementById('passwordRegister').value;

        players.push(PLAYER_DATA);
        console.log('Account erfolgreich erstellt!');

        localStorage.setItem('playerData', JSON.stringify(players));

    }, 10);

    setTimeout(() => {
        closeRegisterWindow();
        openLoginWindow();
    }, 3000);
}

/***************** PlayerData *****************/

function loadPlayerDataOverview() {

    if (PLAYER_DATA.username == "") {
        PLAYER_DATA = JSON.parse(sessionStorage.getItem('loggedPlayer'));
    }

    let playerData = document.getElementsByClassName('playerData')[0];

    playerData.innerHTML = `
        <div class="blurryBackground">
            <div class="playerDataContent">
                <h1>Spielerprofil</h1>
                <h1 class="closePlayerOverview" onclick="closePlayerOverview()">X</h1>
                <div class="playerDataInfos"></div>
                <div class="playerDataGrid"> 
                    <div class="playerDataInventoryHeadline"><h3>Inventar</h3><div class="playerDataInventory"></div></div>
                    <div class="playerDataAchievementsHeadline"><h3>Erfolge</h3><div class="playerDataAchievements"></div></div>
                    <div class="playerDataQuestsHeadline"><h3>Quests</h3><div class="playerDataQuests"></div></div>
                </div>
            </div>
        </div>`;


    let playerDataInfos = document.getElementsByClassName('playerDataInfos')[0];

    playerDataInfos.innerHTML = `
        <div class="playerDataItem"><h3>Username:</h3>${PLAYER_DATA.username}</div>
        <div class="playerDataItem"><h3>Coins:</h3>${PLAYER_DATA.coins}</div>
        <div class="playerDataItem"><h3>Level:</h3>${PLAYER_DATA.level}</div>
        <div class="playerDataItem"><h3>XP:</h3>${PLAYER_DATA.XP}/${PLAYER_DATA.XPToLevelUp}</div>
    `;

    let playerDataInventory = document.getElementsByClassName('playerDataInventory')[0];
    for (let i = 0; i < PLAYER_DATA.inventory.length; i++) {
        playerDataInventory.innerHTML += `<div class="playerDataItem"><p>${PLAYER_DATA.inventory[i]}</p></div>`;
    }

    let playerDataAchievements = document.getElementsByClassName('playerDataAchievements')[0];
    for (let i = 0; i < PLAYER_DATA.achievements.length; i++) {
        playerDataAchievements.innerHTML += `<div class="playerDataItem"><p>${PLAYER_DATA.achievements[i]}</p></div>`;
    }

    let playerDataQuests = document.getElementsByClassName('playerDataQuests')[0];
    for (let i = 0; i < PLAYER_DATA.quests.length; i++) {
        playerDataQuests.innerHTML += `<div class="playerDataItem"><p>${PLAYER_DATA.quests[i]}</p></div>`;
    }

    if (PLAYER_DATA.achievements.length == 0) {
        playerDataAchievements.innerHTML += `<div class="playerDataItem"><p>Keine Erfolge</p></div>`;
    }

    if (PLAYER_DATA.inventory.length == 0) {
        playerDataInventory.innerHTML += `<div class="playerDataItem"><p>Inventar ist leer</p></div>`;
    }

    if (PLAYER_DATA.quests.length == 0) {
        playerDataQuests.innerHTML += `<div class="playerDataItem"><p>Keine Quests</p></div>`;
    }

    playerData.style.display = 'block';
    setTimeout(() => {
        playerData.style.opacity = '1';
    }, 50);
}

function closePlayerOverview() {
    let playerData = document.getElementsByClassName('playerData')[0];
    playerData.style.opacity = '0';

    setTimeout(() => { playerData.style.display = 'none'; }, 300);
}