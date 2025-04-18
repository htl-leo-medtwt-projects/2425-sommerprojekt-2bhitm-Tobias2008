let checkIfPlayerLogged = JSON.parse(localStorage.getItem('loggedPlayer')) ?? { isLoggedIn: false, user: [], time: new Date };

/******************* Login *******************/

function openLoginWindow() {
    if (document.getElementById('registerWindow').style.display === 'block') {
        closeRegisterWindow();
    }

    if (checkIfPlayerLoggedIn()) {
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
        if (players[i].username.toLowerCase() == document.getElementById('usernameLogin').value.toLowerCase() && players[i].password == document.getElementById('passwordLogin').value) {
            console.log('Login erfolgreich!');
            PLAYER_DATA = {isLoggedIn: true, user: players[i], time: new Date};
            localStorage.setItem('loggedPlayer', JSON.stringify({ PLAYER_DATA }));

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
        } else if (players[i].username.toLowerCase() == document.getElementById('usernameLogin').value.toLowerCase() && players[i].password != document.getElementById('passwordLogin').value) {
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
        PLAYER_DATA.user.username = document.getElementById('usernameRegister').value;
        PLAYER_DATA.user.password = document.getElementById('passwordRegister').value;

        console.log("PW:" + document.getElementById('passwordRegister').value)
        console.log("User:" + PLAYER_DATA)

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

function closePlayerOverview() {
    let playerData = document.getElementsByClassName('playerData')[0];
    playerData.style.opacity = '0';

    setTimeout(() => { playerData.style.display = 'none'; }, 300);
}

function checkIfPlayerLoggedIn() {
    checkIfPlayerLogged = JSON.parse(localStorage.getItem('loggedPlayer')) ?? { isLoggedIn: false, user: [], time: new Date };
    if (checkIfPlayerLogged.isLoggedIn == false) {
        localStorage.setItem('loggedPlayer', JSON.stringify({ isLoggedIn: false, user: [], time: new Date }));
        return false;
    }

    let now = new Date;
    if (((new Date(now).getTime() - new Date(checkIfPlayerLogged.time).getTime()) / 1000 / 60 / 60) > 24) {
        localStorage.setItem('loggedPlayer', JSON.stringify({ isLoggedIn: false, user: [], time: new Date }));
        return false;
    }

    return true;
}
