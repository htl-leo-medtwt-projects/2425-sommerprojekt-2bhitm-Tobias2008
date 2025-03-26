

// Autor: Tobias Payreder

console.log('script.js loaded');

let theme = localStorage.getItem('theme') ?? 'WhiteMode';


// Habe ChatGPT gefragt, wie ich prüfen kann ob ein Element existiert/geladen ist
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = './style/style.css';
style.onload = () => {
    console.log('style.css loaded');
    loadDarkWhiteMode();
};
document.head.appendChild(style);

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

        localStorage.setItem('theme', 'WhiteMode');
    } else if (theme === 'DarkMode') {
        root.style.setProperty('--color', '#fce4f1');
        root.style.setProperty('--lighter-color', '#cfa8c3');
        root.style.setProperty('--secondary-color', '#3a1c2f');
        root.style.setProperty('--accent-color', '#ff7eb9');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #1b0f1b 0%, #2a1a2e 50%, #1b0f1b 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #3a1c2f 0%, #5e2a4d 50%, #3a1c2f 100%)');

        localStorage.setItem('theme', 'DarkMode');
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

        localStorage.setItem('theme', 'DarkMode');
    } else if (theme === 'DarkMode') {
        root.style.setProperty('--color', '#351829');
        root.style.setProperty('--lighter-color', '#7e3d64');
        root.style.setProperty('--secondary-color', '#fcd6e9');
        root.style.setProperty('--accent-color', '#d96cbf');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #fff4fa 0%, #fde0f0 50%, #fcd6e9 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #f4b4d7 0%, #f28ec4 50%, #fcb4dc 100%)');

        localStorage.setItem('theme', 'WhiteMode');
    }
}

/************************************************/
/******** Dynamische Content Generierung ********/
/************************************************/

/* Nav */
let nav = document.querySelector('nav');

loadNav();

function loadNav() {
    nav.innerHTML = `
        <div class="logo"><a id="logo" href="${MUST_HAVE_DATA.nav[0].link}">MindQuest</a></div>
        <div class="nav"></div>
    `;

    for (let i = 1; i < MUST_HAVE_DATA.nav.length - 1; i++) {
        document.getElementsByClassName('nav')[0].innerHTML += `
            <a href="${MUST_HAVE_DATA.nav[i].link}" onclick="${MUST_HAVE_DATA.nav[i].onclick}">${MUST_HAVE_DATA.nav[i].name}</a>
        `;
    }
    document.getElementsByClassName('nav')[0].innerHTML += `
        <div class="DarkWhiteMode" onclick="${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 1].onclick}">${MUST_HAVE_DATA.nav[MUST_HAVE_DATA.nav.length - 1].name}</div>`
}
