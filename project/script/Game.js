let countryData = {
    "all": [],
    "europe": [],
    "africa": [],
    "asia": [],
    "america": [],
    "oceania": [],
}

let lenght = {
    "easy": 5,
    "medium": 10,
    "hard": 15
}

let matchData = {
    "lenght": 0,
    "countrys": [],
    "correct": 0,
    "correctCountries": [],
    "wrong": 0,
    "wrongCountries": [],
};

let PLAYER = JSON.parse(localStorage.getItem('loggedPlayer')) ?? {};
console.log("PLAYER", PLAYER);

document.addEventListener('DOMContentLoaded', () => {
    loadDarkWhiteMode();
    getPlayerData();
    load();

    if (!game.type || !game.level || !game.difficulty) {
        window.location.href = './quiz.html'
    }

    switch (game.type) {
        case 'flag':
            getGameDataFlag();
            break;
        case 'music':
            getGameDataMusic();
            break;

    }
});

let urlTemp = new URLSearchParams(window.location.search)

let game = {
    url: new URLSearchParams(window.location.search),
    type: urlTemp.get('type'),
    level: urlTemp.get('level'),
    difficulty: urlTemp.get('difficulty'),
}
console.log("Game", game)

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

    }
}

function load() {
    getPlayerData();
    document.querySelector('nav').innerHTML = `
        <div class="nav-container">
            <div id="nav-coins">${PLAYER.user.coins} <img src="../media/Images/coin.png" class="coin-icon"></div>
            <div id="nav-hints">${getHints()} <img src="../media/Images/hint.png" class="hint-icon"></div>
        </div>
        <div class="nav-container">
            <div id="nav-level">Level ${PLAYER.user.level}</div>
            <div id="nav-logout" onclick="leave()">Leave</div>
        </div>
    `;
}

function getPlayerData() { PLAYER = JSON.parse(localStorage.getItem('loggedPlayer')); }

function getHints() {
    getPlayerData();
    for (let i = 0; i < PLAYER.user.inventory.length; i++) {
        if (PLAYER.user.inventory[i].name === 'Random hilfe') {
            return PLAYER.user.inventory[i].quantity;
        }
    }
    return 0;
}

function leave() {
    window.location.href = '../index.html';
}

function getGameDataFlag() {
    fetch(`https://restcountries.com/v3.1/independent?status=true`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            countryData.all = data;
            countryData.europe = data.filter((country) => country.region === 'Europe');
            countryData.africa = data.filter((country) => country.region === 'Africa');
            countryData.asia = data.filter((country) => country.region === 'Asia');
            countryData.america = data.filter((country) => country.region === 'Americas');
            countryData.oceania = data.filter((country) => country.region === 'Oceania');

            console.log("COUNTRIES", data);
            console.log("COUNTRIES sorted", countryData);

            startGame();

            // document.getElementById("data").innerHTML = `<img src="https://flagcdn.com/256x192/${data[0].cca2.toLowerCase()}.png">`
        })
        .catch((error) => {
            throw error;
        });
}

function getGameDataMusic() {
    if (!MUSIKQUIZDATA) {
        console.log('No data found');
        MUSIKQUIZDATA = {};
        return;
    }

    startGame();
}

let answers = [];

function startGame() {
    let brick = "";
    switch (game.type) {
        case 'flag':
            let correctAnswerIndex;
            let correctFlag;

            correctAnswerIndex = Math.floor(Math.random() * 4);
            console.log("URL", game);

            for (let i = 0; i < 4; i++) {
                let randomCountry = countryData[game.level][Math.floor(Math.random() * countryData[game.level].length)];

                if (answers.includes(randomCountry)) {
                    i--;
                    continue;
                }
                answers[i] = (randomCountry);

                if (i === correctAnswerIndex && matchData.countrys.includes(answers[correctAnswerIndex])) {
                    i--;
                    continue;
                }

                matchData.countrys.push(answers[i]);


            }

            correctFlag = `<img src="https://flagcdn.com/w320/${answers[correctAnswerIndex].cca2.toLowerCase()}.png">`;

            matchData.flag = `"<img src="https://flagcdn.com/w320/${answers[correctAnswerIndex].cca2.toLowerCase()}.png">"`;

            document.getElementById('image').innerHTML = correctFlag;

            brick = '<div class="answers">'

            for (let i = 0; i < answers.length; i++) {
                brick += `<div class="answer" onclick="checkAnswer(${i}, ${correctAnswerIndex})">${answers[i].name.common}</div>`
            }
            brick += '</div>'
            document.getElementById('answers').innerHTML = brick;

            break;

        case 'music':
            console.log("MUSIKQUIZDATA", MUSIKQUIZDATA);
            let question = Math.floor(Math.random() * 2000) + 1;

            if (question <= 1000) {
                document.getElementById('image').innerHTML = `${MUSIKQUIZDATA.Music[question].question}`;
                for (let i = 0; i < answers.length; i++) {
                    brick += `<div class="answer" onclick="checkAnswer(${i}, ${correctAnswerIndex})">${MUSIKQUIZDATA.Music[question][i]}</div>`
                }
                document.getElementById('answers').innerHTML = brick;

            } else {
                question -= 1000;
                document.getElementById('image').innerHTML = `${MUSIKQUIZDATA.Artist[question].question}`;
                for (let i = 0; i < answers.length; i++) {
                    brick += `<div class="answer" onclick="checkAnswer(${i}, ${correctAnswerIndex})">${MUSIKQUIZDATA.Artist[question].options[i]}</div>`
                }
                document.getElementById('answers').innerHTML = brick;

            }


            break;

    }
}

function checkAnswer(index, correctIndex) {
    matchData.lenght++;

    if (index === correctIndex) {
        matchData.correct++;
        matchData.correctCountries.push(answers[index]);
        document.getElementById('result').innerHTML = `<div class="correct">Correct!</div>`;
        document.getElementById('result').style.opacity = '1';

        setTimeout(() => {
            document.getElementById('result').style.opacity = '0';
        }, 2000);

        console.log("MatchData", matchData);
        console.log('Round finished!');

    } else {
        matchData.wrong++;
        matchData.wrongCountries.push(answers[index]);
        document.getElementById('result').innerHTML = `<div class="wrong">Wrong!</div>`;
        document.getElementById('result').style.opacity = '1';

        setTimeout(() => {
            document.getElementById('result').style.opacity = '0';
        }, 2000);

        console.log("MatchData", matchData);
        console.log('Round finished!');
    }

    if (matchData.lenght < lenght[game.difficulty]) {
        answers = [];
        setTimeout(() => {
            startGame();
        }, 2300);
    } else {
        setTimeout(() => {
            document.getElementById('image').innerHTML = ``;
            document.getElementById('answers').innerHTML = ``;
            document.getElementById('result').innerHTML = ``;
            document.getElementById('result').innerHTML = `<div class="correct">You completed the Game! Your stats:</div>`;
            document.getElementById('result').innerHTML += `<div class="correct">Correct: ${matchData.correct}</div>`;
            document.getElementById('result').innerHTML += `<div class="correct">Wrong: ${matchData.wrong}</div>`;
            document.getElementById('result').style.opacity = '1';

            PLAYER.user.coins += matchData.correct * 3;
            PLAYER.user.XP += matchData.correct * (89 / 71);

            if (PLAYER.user.XP >= PLAYER.user.XPToLevelUp) {
                PLAYER.user.level++;
                PLAYER.user.XP = PLAYER.user.XP - PLAYER.user.XPToLevelUp;
                PLAYER.user.XPToLevelUp = Math.floor(PLAYER.user.XPToLevelUp * 1.2);
            }

            let players = JSON.parse(localStorage.getItem('players')) ?? [];
            let playerIndex = players.findIndex(player => player.username === PLAYER.user.username);
            players[playerIndex] = PLAYER;
            localStorage.setItem('players', JSON.stringify(players));
            localStorage.setItem('loggedPlayer', JSON.stringify(PLAYER));

            setTimeout(() => {
                document.getElementById('result').style.opacity = '0';
                setTimeout(() => {
                    window.location.href = `./quiz.html`;
                }, 300);
            }, 2000);
        }, 2300);
    }
}