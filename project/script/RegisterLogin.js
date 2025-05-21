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
    console.log(players)

    for (let i = 0; i < players.length; i++) {
        if (players[i].user.username.toLowerCase() == document.getElementById('usernameLogin').value.toLowerCase() && players[i].user.password == document.getElementById('passwordLogin').value) {
            console.log('Login erfolgreich!');
            players[i].isLoggedIn = true;
            PLAYER_DATA = players[i];

            localStorage.setItem('loggedPlayer', JSON.stringify(PLAYER_DATA));
            localStorage.setItem('playerData', JSON.stringify(players));

            document.getElementsByClassName('infoItem')[0].innerHTML = 'Login erfolgreich! - Willkommen ' + PLAYER_DATA.user.username + '!';
            document.getElementsByClassName('infoItem')[0].style.opacity = '1';
            document.getElementsByClassName('infoItem')[0].style.padding = '1rem';

            setTimeout(() => {
                document.getElementsByClassName('infoItem')[0].style.opacity = '0';
                document.getElementsByClassName('infoItem')[0].style.padding = '0';

                setTimeout(() => { document.getElementsByClassName('infoItem')[0].innerHTML = ''; }, 500);
            }, 1500);

            setTimeout(() => { closeLoginWindow(); }, 2000);

            return;
        } else if (players[i].user.username.toLowerCase() == document.getElementById('usernameLogin').value.toLowerCase() && players[i].password != document.getElementById('passwordLogin').value) {
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
    console.log(players);

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
    console.log(players)

    for (let i = 0; i < players.length; i++) {
        if (players[i].user.username.toLowerCase() == document.getElementById('usernameRegister').value.toLowerCase()) {
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
        console.log(PLAYER_DATA);
        console.log(players)
        
        PLAYER_DATA.user.username = document.getElementById('usernameRegister').value;
        PLAYER_DATA.user.password = document.getElementById('passwordRegister').value;

        console.log("PW:" + document.getElementById('passwordRegister').value)
        console.log(PLAYER_DATA)

        players.push(PLAYER_DATA);
        console.log('Account erfolgreich erstellt!');

        document.getElementsByClassName('infoItem')[1].innerHTML = 'Account erfolgreich erstellt!';
        document.getElementsByClassName('infoItem')[1].style.opacity = '1';
        document.getElementsByClassName('infoItem')[1].style.padding = '1rem';

        setTimeout(() => {
            document.getElementsByClassName('infoItem')[1].style.opacity = '0';
            document.getElementsByClassName('infoItem')[1].style.padding = '0';

            setTimeout(() => { document.getElementsByClassName('infoItem')[1].innerHTML = ''; }, 300);
        }
            , 3000);

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
    let players = JSON.parse(localStorage.getItem('playerData')) ?? [];
    let checkIfPlayerLogged = JSON.parse(localStorage.getItem('loggedPlayer')) ?? { isLoggedIn: false, user: {}, time: new Date(new Date) };
    if (checkIfPlayerLogged.isLoggedIn == false) {
        localStorage.setItem('loggedPlayer', JSON.stringify({ isLoggedIn: false, user: {}, time: new Date(new Date) }));
        return false;
    }

    let now = new Date(new Date);
    if (((new Date(now).getTime() - new Date(checkIfPlayerLogged.time).getTime()) / 1000 / 60 / 60) > 24) {
        players.forEach(player => {
            if (player.user.username.toLowerCase() == checkIfPlayerLogged.user.username.toLowerCase()) {
                player.isLoggedIn = false;
                player.time = new Date(new Date);
            }
        });
        localStorage.setItem('playerData', JSON.stringify(players));
        localStorage.setItem('loggedPlayer', JSON.stringify({ isLoggedIn: false, user: {}, time: new Date(new Date) }));
        return false;
    } else {
        localStorage.setItem('loggedPlayer', JSON.stringify({ isLoggedIn: true, user: checkIfPlayerLogged.user, time: new Date(new Date) }));
        PLAYER_DATA = JSON.parse(localStorage.getItem('loggedPlayer'));
    }

    return true;
}


function logout() {
    let players = JSON.parse(localStorage.getItem('playerData')) ?? [];

    for (let i = 0; i < players.length; i++) {
        if (players[i].user.username.toLowerCase() == PLAYER_DATA.user.username.toLowerCase()) {
            players[i].isLoggedIn = false;
            localStorage.setItem('loggedPlayer', JSON.stringify({ isLoggedIn: false, user: {}, time: new Date(new Date) }));
            localStorage.setItem('playerData', JSON.stringify(players));
            console.log('Logout erfolgreich!');
            PLAYER_DATA = { user: {}, coins: 0, xp: 0, level: 0, powerUps: [], achievements: [] };
            document.getElementsByClassName('infoItem')[0].innerHTML = 'Logout erfolgreich!';
            document.getElementsByClassName('infoItem')[0].style.opacity = '1';
            document.getElementsByClassName('infoItem')[0].style.padding = '1rem';

            setTimeout(() => {
                document.getElementsByClassName('infoItem')[0].style.opacity = '0';
                document.getElementsByClassName('infoItem')[0].style.padding = '0';

                setTimeout(() => { document.getElementsByClassName('infoItem')[0].innerHTML = ''; }, 300);

                closeLogout();
            }, 2000);


            return;
        }
    }
}

function checkIfPlayerReallyWantsToLogout() {
    console.log('Logout?');
    closePlayerOverview();

    if (!document.getElementById('temp')) {
        document.body.innerHTML += "<div id='temp'><div class='blurryBackground'><div class='confirmBox'></div></div></div>";
    }

    let box = document.getElementsByClassName('confirmBox')[0];
    box.innerHTML = `
        <div class="confirmBoxContent">
            <h2>Logout</h2>
            <p>Bist du sicher, dass du dich ausloggen möchtest?</p>
            <div class="flexBox">
            <div class="confirmButton" onclick="logout()">Ausloggen</div>
            <div class="cancelButton" onclick="closeLogout()">Angemeldet bleiben</div>
            </div>
        </div>`;

    box.style.display = 'block';
    box.style.opacity = '1';

}


function closeLogout() {
    let box = document.getElementById('temp');
    box.style.opacity = '0';

    setTimeout(() => {
        if (box) {
            box.remove();
        }
    }, 300);
}
