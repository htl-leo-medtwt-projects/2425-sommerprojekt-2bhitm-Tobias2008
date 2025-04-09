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
    loadFooterData();
    loadData();

    if(localStorage.getItem('User') === null || localStorage.getItem('User') === undefined) {
        localStorage.setItem('User', JSON.stringify(PLAYER_DATA));
    }
}
load();

function loadNav() {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
        <div class="logo"><img src=".${MUST_HAVE_DATA.nav[1].link}" onclick="openLoginWindow()"><a id="logo" href=".${MUST_HAVE_DATA.nav[0].link}">MindQuest</a></div>
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

function loadFooterBricks() {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="left">
            <div class="footerLogo"><a href=".${MUST_HAVE_DATA.nav[0].link}">MindQuest</a></div>
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


function loadFooterData() {
    let socials = document.getElementsByClassName('socials')[0];

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

function loadDarkWhiteMode() {
    let root = document.querySelector(':root');
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
    let root = document.querySelector(':root');
    theme = localStorage.getItem('theme') ?? 'WhiteMode';

    if (theme === 'WhiteMode') {
        root.style.setProperty('--color', '#fce4f1');
        root.style.setProperty('--lighter-color', '#cfa8c3');
        root.style.setProperty('--secondary-color', '#3a1c2f');
        root.style.setProperty('--accent-color', '#ff7eb9');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #1b0f1b 0%, #2a1a2e 50%, #1b0f1b 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #3a1c2f 0%, #5e2a4d 50%, #3a1c2f 100%)');
        root.style.setProperty('--extra-highlight', '#51213c');

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

        localStorage.setItem('theme', 'WhiteMode');

        document.getElementsByClassName('DarkWhiteMode')[0].innerHTML = 'DarkMode';
    }
}

/******************** Script Start ********************/

function loadData() {
    let shopData = document.getElementById('shopData');
    shopData.innerHTML = `
        <div class="shopTitle">${SHOP_DATA.title}</div>
        <div class="shopDescription">${SHOP_DATA.description}</div>
        <div class="bigView"></div>
        <div class="shopItems"></div>
        <div id="loginWindow"></div>
    `;
    let shopItems = document.getElementsByClassName('shopItems')[0];

    for (let i = 0; i < SHOP_DATA.items.length; i++) {
        shopItems.innerHTML += `
            <div class="shopItem">
                <div class="itemheader">
                    <img class="shopicon" src=".${SHOP_DATA.items[i].icon}" alt="${SHOP_DATA.items[i].name}">    
                    <div class="itemName">${SHOP_DATA.items[i].name}</div>
                </div>
                <div class="itemDescription">${SHOP_DATA.items[i].description}</div>
                <div class="itemPrice">${SHOP_DATA.items[i].price} Coins</div>
                <div class="buyButton" onclick="buyPowerUp(${i})"><p>Buy</p></div>
            </div>
        `;
    }

}

function buyPowerUp(index) {
    if(userLoggedIn()) {
        let userData = JSON.parse(localStorage.getItem('User'));
        let shopData = SHOP_DATA.items[index];

        if (userData.Coins >= shopData.price) {
            userData.Coins -= shopData.price;
            userData.Inventory.push(shopData);
            localStorage.setItem('User', JSON.stringify(userData));
            // item gekauft
        } else {
            // nicht genug Coins
            alert("nicht genus coins");
        }
    }
}

function userLoggedIn() {
    let userData = JSON.parse(localStorage.getItem('User'));
    return (
        userData.Username != "" &&
        userData.Password != "" 
    )
}

function openLoginWindow() {
    let loginWindow = document.getElementById('loginWindow');
    loginWindow.innerHTML = `
        <div class="loginWindow">
            <div class="loginWindowTitle">Login</div>
            <div class="loginWindowContent">
                <input type="text" id="username" placeholder="Username">
                <input type="password" id="password" placeholder="Password">
                <div class="loginButton" onclick="login()">Login</div>
                <div class="registerButton" onclick="register()">Register</div>
            </div>
        </div>
    `;
}

// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });