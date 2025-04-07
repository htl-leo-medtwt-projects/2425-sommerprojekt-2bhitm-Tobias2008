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
        root.style.setProperty('--extra-highlight', '#f9abd7');
        
        localStorage.setItem('theme', 'DarkMode');

        document.getElementsByClassName('DarkWhiteMode')[0].innerHTML = 'WhiteMode';
    } else if (theme === 'DarkMode') {
        root.style.setProperty('--color', '#351829');
        root.style.setProperty('--lighter-color', '#7e3d64');
        root.style.setProperty('--secondary-color', '#fcd6e9');
        root.style.setProperty('--accent-color', '#d96cbf');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #fff4fa 0%, #fde0f0 50%, #fcd6e9 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #f4b4d7 0%, #f28ec4 50%, #fcb4dc 100%)');
        root.style.setProperty('--extra-highlight', '#51213c');


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
        <div class="logo"><a id="logo" href="${MUST_HAVE_DATA.nav[0].link}">MindQuest</a></div>
        <div class="nav"></div>
    `;

    for (let i = 1; i < MUST_HAVE_DATA.nav.length - 1; i++) {
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
    `;
}

function loadStartpageData() {
    console.log('STARTPAGE_DATA:', STARTPAGE_DATA);
    // Overview
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

    //Flaggenquiz
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

    //Länderquiz
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

    //Musikquiz
    let musikquiz = document.getElementsByClassName('musikquiz')[0];

    for (let i = 0; i < STARTPAGE_DATA.musikquiz.length; i++) {
        musikquiz.innerHTML += `
           <div class="musikinfoItem" id="musikinfoItem${i}" onclick="animateMusikQuizData(${i})"><div class="musikHeadline">${STARTPAGE_DATA.musikquiz[i].headline}</div>
        <div class="content"><p>${STARTPAGE_DATA.musikquiz[i].information}</p></div></div>
            `;
    }

    let bottomNav = document.getElementsByClassName('bottomNav')[0];
    bottomNav.innerHTML = `<h1>Sonstiges...</h1>`;

    //Bottomnav

    bottomNav.innerHTML += `
        <div class="bottomNavButtons">
            <a href="#">Back2Top</a>
            <a href="${MUST_HAVE_DATA.nav[1].link}">Spielerklärung</a>
            
        </div>
`;
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