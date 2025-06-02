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
    let root = document.querySelector(':root');
    let theme = localStorage.getItem('theme') ?? 'WhiteMode';

    if (theme === 'WhiteMode') {
        root.style.setProperty('--color', '#1b3a4b');
        root.style.setProperty('--lighter-color', '#4a90e2');
        root.style.setProperty('--secondary-color', '#80deea');
        root.style.setProperty('--accent-color', '#00bcd4');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #e0f7fa 0%, #b2ebf2 50%, #80deea 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #56ccf2 0%, #2f80ed 50%, #56d8e4 100%)');
        root.style.setProperty('--extra-highlight', '#b2ebf2');
        root.style.setProperty('--invert', 'invert(0)');

        localStorage.setItem('theme', 'WhiteMode');

        for (let i = 0; i < document.getElementsByClassName('DarkWhiteMode').length; i++) {
            document.getElementsByClassName('DarkWhiteMode')[i].innerHTML = 'DarkMode';
        }
    } else if (theme === 'DarkMode') {
        root.style.setProperty('--color', '#c0d6df');
        root.style.setProperty('--lighter-color', '#8fbccf');
        root.style.setProperty('--secondary-color', '#1f4f7a');
        root.style.setProperty('--accent-color', '#39c0d6');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #0b223c 0%, #153a5d 50%, #1f4f7a 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #074c6d 0%, #0a5275 50%, #056680 100%)');
        root.style.setProperty('--extra-highlight', '#3da9c9');
        root.style.setProperty('--invert', 'invert(0)');

        localStorage.setItem('theme', 'DarkMode');

        for (let i = 0; i < document.getElementsByClassName('DarkWhiteMode').length; i++) {
            document.getElementsByClassName('DarkWhiteMode')[i].innerHTML = 'WhiteMode';
        }
    }

    console.log(document.getElementsByClassName('DarkWhiteMode'));
}

function changeDarkWhiteMode() {
    let root = document.querySelector(':root');
    let theme = localStorage.getItem('theme') ?? 'WhiteMode';

    if (theme === 'WhiteMode') {
        root.style.setProperty('--color', '#c0d6df');
        root.style.setProperty('--lighter-color', '#8fbccf');
        root.style.setProperty('--secondary-color', '#1f4f7a');
        root.style.setProperty('--accent-color', '#39c0d6');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #0b223c 0%, #153a5d 50%, #1f4f7a 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #074c6d 0%, #0a5275 50%, #056680 100%)');
        root.style.setProperty('--extra-highlight', '#3da9c9');
        root.style.setProperty('--invert', 'invert(0)');

        localStorage.setItem('theme', 'DarkMode');

        for (let i = 0; i < document.getElementsByClassName('DarkWhiteMode').length; i++) {
            document.getElementsByClassName('DarkWhiteMode')[i].innerHTML = 'WhiteMode';
        }
    } else if (theme === 'DarkMode') {
        root.style.setProperty('--color', '#1b3a4b');
        root.style.setProperty('--lighter-color', '#4a90e2');
        root.style.setProperty('--secondary-color', '#80deea');
        root.style.setProperty('--accent-color', '#00bcd4');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #e0f7fa 0%, #b2ebf2 50%, #80deea 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #56ccf2 0%, #2f80ed 50%, #56d8e4 100%)');
        root.style.setProperty('--extra-highlight', '#b2ebf2');
        root.style.setProperty('--invert', 'invert(0)');

        localStorage.setItem('theme', 'WhiteMode');

        for (let i = 0; i < document.getElementsByClassName('DarkWhiteMode').length; i++) {
            document.getElementsByClassName('DarkWhiteMode')[i].innerHTML = 'DarkMode';
        }
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

    for (let i = 2; i < MUST_HAVE_DATA.nav.length - 2; i++) {
        document.getElementsByClassName('nav')[0].innerHTML += `
            <a href="${MUST_HAVE_DATA.nav[i].link}">${MUST_HAVE_DATA.nav[i].name}</a>
        `;
    }
    document.getElementsByClassName('nav')[0].innerHTML += `
        <div class="DarkWhiteMode" onclick="${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 2].onclick}">${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 2].name}</div>`

    document.querySelector('nav').innerHTML += `<a class="respsonsiveNavMQ" href="${MUST_HAVE_DATA.nav[0].link}" onclick="openResponsiveNav()">${MUST_HAVE_DATA.nav[0].name}</a>`
    document.querySelector('nav').innerHTML += `<img class="respsonsiveImg" src="${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 1].link}" onclick="openResponsiveNav()">`
}

function openResponsiveNav() {
    let nav = document.querySelector('nav');

    nav.innerHTML += `<div id="responsiveNav" class="responsiveNav"></div>`;

    let responsiveNav = document.getElementById('responsiveNav');
    console.log("geht noch");

    responsiveNav.innerHTML = `
        <div class="responsiveNavContent">
            <div class="responsiveNavLinks"></div>
        </div>
    `;

    let responsiveNavLinks = document.querySelector('.responsiveNavLinks');

    for (let i = 2; i < MUST_HAVE_DATA.nav.length - 2; i++) {
        responsiveNavLinks.innerHTML += `
            <a href="${MUST_HAVE_DATA.nav[i].link}">${MUST_HAVE_DATA.nav[i].name}</a>
        `;
    }
    console.log("geht noch 2");


    theme = localStorage.getItem('theme') ?? 'WhiteMode';
    let temp;
    if (theme === 'WhiteMode') {
        temp = 'DarkMode';
    } else if (theme === 'DarkMode') {
        temp = 'WhiteMode';
    }

    responsiveNavLinks.innerHTML += `
        <div class="DarkWhiteMode" onclick="${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 2].onclick}">${temp}</div>
    `;
    responsiveNavLinks.innerHTML += `
        <div class="responsiveNavClose" onclick="closeResponsiveNav()">X</div>
    `;

    document.getElementsByClassName('respsonsiveImg')[0].onclick = closeResponsiveNav;


}

function closeResponsiveNav() {
    let responsiveNav = document.getElementById('responsiveNav');
    if (responsiveNav) {
        document.getElementsByClassName('respsonsiveImg')[0].onclick = openResponsiveNav;
        responsiveNav.remove();
        console.log('Responsive Nav closed');

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

    //Overview
    if (true) {

        let playerData = document.getElementsByClassName('playerData')[0];

        playerData.innerHTML = `
        <div class="blurryBackground">
            <div class="playerDataContent">
                <h1>Spielerprofil</h1>
               
                <div class="playerDataNav"><img onclick="checkIfPlayerReallyWantsToLogout()" src="./media/Images/logoutICON.webp"><h1 class="closePlayerOverview" onclick="closePlayerOverview()">X</h1></div>
                <div class="playerDataInfos"></div>
                <hr class="line">
                <div class="playerDataGrid"> 
                    <div class="playerDataInventoryHeadline"><h3>Inventar</h3><div class="playerDataInventory"></div></div>
                    <div class="playerDataAchievementsHeadline"><h3>Erfolge</h3><div class="playerDataAchievements"></div></div>
                    <div class="playerDataQuestsHeadline"><h3>Quests</h3><div class="playerDataQuests"></div></div>
                </div>
            </div>
        </div>`;
    }
}

function animateMusikQuizData(index) {
    let items = document.querySelectorAll('.musikinfoItem');

    items.forEach((item, i) => {
        let content = item.querySelector('.content');

        if (i === index) {
            let isExpanded = item.style.maxHeight === '26em';

            if (isExpanded) {
                item.style.maxHeight = '4em';
                item.style.padding = '1em';
                if (content) content.style.opacity = '0';
            } else {
                item.style.maxHeight = '26em';
                item.style.padding = '1em';
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

function loadPlayerDataOverview() {

    console.log('PLAYER_DATA:');
    console.log(PLAYER_DATA);
    console.log('localStorage', JSON.parse(localStorage.getItem('loggedPlayer')))


    if (PLAYER_DATA == undefined || PLAYER_DATA.user.username == undefined || PLAYER_DATA.user.username == "" || PLAYER_DATA.user.username == null) {
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

