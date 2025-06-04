console.log(document.body)

let countryData = {
    "all": [],
    "europe": [],
    "africa": [],
    "asia": [],
    "america": [],
    "oceania": [],
}

let flagLength = {
    "easy": 5,
    "medium": 10,
    "hard": 15
}

let flagMatchData = {
    "length": 0,
    "countrys": [],
    "correct": 0,
    "correctCountries": [],
    "wrong": 0,
    "wrongCountries": [],
};

let musicLength = [7, 15]

let PLAYER = JSON.parse(localStorage.getItem('loggedPlayer')) ?? {};
console.log("PLAYER", PLAYER);

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded");

    loadDarkWhiteMode();
    getPlayerData();
    load();

    if (!game.type || !game.level) {
        window.location.href = './quiz.html'
    }

    switch (game.type) {
        case 'flag':
            getGameDataFlag();
            break;
        case 'music':
            console.log("getGameDataMusic 40");
            getGameDataMusic();
            break;
        default:
            window.location.href = './quiz.html'
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
        root.style.setProperty('--color', '#f3ecf9');
        root.style.setProperty('--lighter-color', '#bfa6da');
        root.style.setProperty('--secondary-color', '#2c1e3d');
        root.style.setProperty('--accent-color', '#a86ed4');
        root.style.setProperty('--background-image', 'linear-gradient(320deg, #1c1028 0%, #261437 50%, #1c1028 100%)');
        root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, #2c1e3d 0%, #3e2755 50%, #2c1e3d 100%)');
        root.style.setProperty('--extra-highlight', '#43275a');
        root.style.setProperty('--invert', 'invert(1)');

        localStorage.setItem('theme', 'DarkMode');

        for (let i = 0; i < document.getElementsByClassName('DarkWhiteMode').length; i++) {
            document.getElementsByClassName('DarkWhiteMode')[i].innerHTML = 'WhiteMode';
        }
    }

    console.log(document.getElementsByClassName('DarkWhiteMode'));
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
    window.location.href = './quiz.html';
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
    console.log("getGameDataMusic");

    if (!MUSIKQUIZDATA) {
        console.log('No data found');
        MUSIKQUIZDATA = {};
        return;
    }

    startGame();
}

let answers = [];

function startGame() {
    let randomPercent;

    switch (game.difficulty) {
        case 'easy':
            randomPercent = false;
            break;
        case 'medium':
            randomPercent = Math.ceil(Math.random() * 100) > 50;
            break;
        case 'hard':
            randomPercent = true;
            break;
        default:
            randomPercent = false;
            break;
    }

    console.log("radomPercent", randomPercent);


    console.log("radomPercent", randomPercent);
    console.log("game.level", game.level);

    let brick = "";
    let correctAnswerIndex = 0;
    switch (game.type) {
        case 'flag':
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

                if (i === correctAnswerIndex && flagMatchData.countrys.includes(answers[correctAnswerIndex])) {
                    i--;
                    continue;
                }

                flagMatchData.countrys.push(answers[i]);


            }

            correctFlag = `<img src="https://flagcdn.com/w320/${answers[correctAnswerIndex].cca2.toLowerCase()}.png">`;

            flagMatchData.flag = `"<img src="https://flagcdn.com/w320/${answers[correctAnswerIndex].cca2.toLowerCase()}.png">"`;

            document.getElementById('image').innerHTML = correctFlag;


            if (!randomPercent) {
                for (let i = 0; i < answers.length; i++) {
                    brick += `<div class="answer" onclick="checkAnswerFlag(${i}, ${correctAnswerIndex})">${answers[i].name.common}</div>`
                }
                document.getElementsByClassName('answers')[0].innerHTML = brick;
                document.getElementsByClassName('answersInput')[0].innerHTML = ``;
            } else {
                brick += `<div class="answerinput"><input type="text" id="answer" placeholder="Type your answer here" autocomplete="off"></div>`;
                brick += `<div class="answer" onclick='checkAnswerInput(${JSON.stringify(answers[correctAnswerIndex].name.common)})'>Submit Answer</div>`;
                document.getElementsByClassName('answersInput')[0].innerHTML = brick;
                document.getElementsByClassName('answers')[0].innerHTML = ``;

                document.getElementById('answer').focus();

                document.getElementById('answer').addEventListener('keydown', function (event) {
                    if (event.key === 'Enter') {

                        document.getElementById('answer').removeEventListener('keydown', arguments.callee);

                        console.log("Enter pressed");

                        event.preventDefault();
                        eval(document.getElementsByClassName('answer')[0].getAttribute('onclick'));
                    }
                });
            }




            break;

        case 'music':
            console.log("Music");

            console.log("MUSIKQUIZDATA", MUSIKQUIZDATA);

            let boolean = Math.floor(Math.random() * 2) == 0;
            let question;

            if (boolean) {
                question = Math.floor(Math.random() * MUSIKQUIZDATA.Music.length);
                console.log("question", question);
                document.getElementById('image').innerHTML = `<p>${MUSIKQUIZDATA.Music[question].question}</p>`;
                for (let i = 0; i < MUSIKQUIZDATA.Music[question].options.length; i++) {
                    if (MUSIKQUIZDATA.Music[question].options[i] === MUSIKQUIZDATA.Music[question].answer) {
                        console.log("MUSIKQUIZDATA.Music[question].options[i]", MUSIKQUIZDATA.Music[question].options[i]);
                        console.log("MUSIKQUIZDATA.Music[question].answer", MUSIKQUIZDATA.Music[question].answer);
                        console.log("MUSIKQUIZDATA.Music[question].options[i] === MUSIKQUIZDATA.Music[question].answer", MUSIKQUIZDATA.Music[question].options[i] === MUSIKQUIZDATA.Music[question].answer);
                        console.log("i", i);

                        correctAnswerIndex = i;
                    }
                }

                if (randomPercent) {
                    brick += `<div class="answerinput"><input type="text" id="answer" placeholder="Type your answer here" autocomplete="off"></div>`;
                    brick += `<div class="answer" onclick='checkAnswerInput(${JSON.stringify(MUSIKQUIZDATA.Music[question].options[correctAnswerIndex])})'>Submit Answer</div>`;
                    document.getElementsByClassName('answersInput')[0].innerHTML = brick;
                    document.getElementsByClassName('answers')[0].innerHTML = ``;
                    document.getElementById('answer').focus();
                } else {
                    for (let i = 0; i < MUSIKQUIZDATA.Music[question].options.length; i++) {
                        brick += `<div class="answer" onclick="checkAnswerMusic(${i}, ${correctAnswerIndex}, '${MUSIKQUIZDATA.Music[question].options[correctAnswerIndex]}')">${MUSIKQUIZDATA.Music[question].options[i]}</div>`
                    }
                    document.getElementsByClassName('answersInput')[0].innerHTML = '';
                    document.getElementsByClassName('answers')[0].innerHTML = brick;
                }
            } else {
                question = Math.floor(Math.random() * MUSIKQUIZDATA.Artist.length);
                console.log("question", question);
                document.getElementById('image').innerHTML = `<p>${MUSIKQUIZDATA.Artist[question].question}</p>`;
                for (let i = 0; i < MUSIKQUIZDATA.Artist[question].options.length; i++) {
                    if (MUSIKQUIZDATA.Artist[question].options[i] === MUSIKQUIZDATA.Artist[question].answer) {
                        console.log("MUSIKQUIZDATA.Artist[question].options[i]", MUSIKQUIZDATA.Artist[question].options[i]);
                        console.log("MUSIKQUIZDATA.Artist[question].answer", MUSIKQUIZDATA.Artist[question].answer);
                        console.log("MUSIKQUIZDATA.Artist[question].options[i] == MUSIKQUIZDATA.Artist[question].answer", MUSIKQUIZDATA.Artist[question].options[i] == MUSIKQUIZDATA.Music[question].answer);
                        console.log("i", i);
                        correctAnswerIndex = i;
                    }
                }

                if (randomPercent) {
                    brick += `<div class="answerinput"><input type="text" id="answer" placeholder="Type your answer here" autocomplete="off"></div>`;
                    brick += `<div class="answer" onclick='checkAnswerInput(${JSON.stringify(MUSIKQUIZDATA.Artist[question].options[correctAnswerIndex])})'>Submit Answer</div>`;
                    document.getElementsByClassName('answersInput')[0].innerHTML = brick;
                    document.getElementsByClassName('answers')[0].innerHTML = ``;

                    document.getElementById('answer').focus();
                } else {
                    for (let i = 0; i < MUSIKQUIZDATA.Artist[question].options.length; i++) {
                        brick += `<div class="answer" onclick="checkAnswerMusic(${i}, ${correctAnswerIndex}, '${MUSIKQUIZDATA.Artist[question].options[correctAnswerIndex]}')">${MUSIKQUIZDATA.Artist[question].options[i]}</div>`
                    }
                    document.getElementsByClassName('answersInput')[0].innerHTML = '';
                    document.getElementsByClassName('answers')[0].innerHTML = brick;
                }


            }


            if (document.getElementById('answer')) {
                document.getElementById('answer').addEventListener('keydown', function (event) {
                    if (event.key === 'Enter') {

                        document.getElementById('answer').removeEventListener('keydown', arguments.callee);

                        console.log("Enter pressed");

                        event.preventDefault();
                        eval(document.getElementsByClassName('answer')[0].getAttribute('onclick'));
                    }
                });
                break;

            }
    }
}

function checkAnswerFlag(index, correctIndex) {
    let answers = document.getElementsByClassName('answer');

    for (let i = 0; i < answers.length; i++) {
        answers[i].onclick = null;
    }

    flagMatchData.length++;

    if (index === correctIndex) {
        flagMatchData.correct++;
        flagMatchData.correctCountries.push(answers[index]);
        document.getElementById('result').innerHTML = `<div class="correct">Correct!</div>`;
        document.getElementById('result').style.opacity = '1';

        setTimeout(() => {
            document.getElementById('result').style.opacity = '0';
        }, 2000);

        console.log("MatchData", flagMatchData);
        console.log('Round finished!');
        PLAYER.user.coins += 3;
        PLAYER.user.XP += 89 / 71;
        document.getElementById('nav-coins').innerHTML = `${PLAYER.user.coins} <img src="../media/Images/coin.png" class="coin-icon">`;


    } else {
        flagMatchData.wrong++;
        flagMatchData.wrongCountries.push(answers[index]);
        document.getElementById('result').innerHTML = `<div class="wrong">Wrong!</div>`;
        document.getElementById('result').style.opacity = '1';

        setTimeout(() => {
            document.getElementById('result').style.opacity = '0';
        }, 2000);

        console.log("MatchData", flagMatchData);
        console.log('Round finished!');
    }

    if (flagMatchData.length < flagLength[game.difficulty]) {
        answers = [];
        setTimeout(() => {
            startGame();
        }, 2300);
    } else {
        setTimeout(() => {
            document.getElementById('image').innerHTML = ``;
            document.getElementsByClassName('answers')[0].innerHTML = ``;
            document.getElementsByClassName('answersInput')[0].innerHTML = ``;
            document.getElementById('result').innerHTML = ``;
            document.getElementById('result').innerHTML = `<div class="correct">You completed the Game! Your stats:</div>`;
            document.getElementById('result').innerHTML += `<div class="correct">Correct: ${flagMatchData.correct}</div>`;
            document.getElementById('result').innerHTML += `<div class="correct">Wrong: ${flagMatchData.wrong}</div>`;
            document.getElementById('result').style.opacity = '1';

            PLAYER.user.coins += flagMatchData.correct * 3;
            PLAYER.user.XP += flagMatchData.correct * (89 / 71);

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

function checkAnswerMusic(index, correctIndex, correctAnswer) {
    flagMatchData.length++;

    for (let i = 0; i < document.getElementsByClassName('answer').length; i++) {
        document.getElementsByClassName('answer')[i].onclick = null;
    }

    console.log("checkAnswerMusic", index, correctIndex);
    if (index === correctIndex) {
        flagMatchData.correct++;

        document.getElementById('result').innerHTML = `<div class="correct">Correct!</div>`;
        document.getElementById('result').style.opacity = '1';
        PLAYER.user.coins += 3;
        PLAYER.user.XP += 89 / 71;
        document.getElementById('nav-coins').innerHTML = `${PLAYER.user.coins} <img src="../media/Images/coin.png" class="coin-icon">`;

        setTimeout(() => {
            document.getElementById('result').style.opacity = '0';
        }, 2000);

        console.log("MatchData", flagMatchData);
        console.log('Round finished!');

    } else {
        flagMatchData.wrong++;
        document.getElementById('result').innerHTML = `<div class="wrong">Wrong!<br>Correct Answer: ${correctAnswer}</div>`;
        document.getElementById('result').style.opacity = '1';

        setTimeout(() => {
            document.getElementById('result').style.opacity = '0';
        }, 2000);

        console.log("MatchData", flagMatchData);
        console.log('Round finished!');
    }

    console.log("flagMatchData length", flagMatchData.length);
    console.log("flagLength", flagLength[game.difficulty]);
    console.log("flagL", flagLength);
    console.log("gameDiff", game.difficulty);


    if (flagMatchData.length < flagLength[game.difficulty]) {
        answers = [];
        setTimeout(() => {
            startGame();
        }, 2300);
    } else {
        setTimeout(() => {
            document.getElementById('image').innerHTML = ``;
            document.getElementsByClassName('answers')[0].innerHTML = ``;
            document.getElementsByClassName('answersInput')[0].innerHTML = ``;
            document.getElementById('result').innerHTML = ``;
            document.getElementById('result').innerHTML = `<div class="correct">You completed the Game! Your stats:</div>`;
            document.getElementById('result').innerHTML += `<div class="correct">Correct: ${flagMatchData.correct}</div>`;
            document.getElementById('result').innerHTML += `<div class="correct">Wrong: ${flagMatchData.wrong}</div>`;
            document.getElementById('result').style.opacity = '1';

            PLAYER.user.coins += flagMatchData.correct * 3;
            PLAYER.user.XP += flagMatchData.correct * (89 / 71);

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

// function cutMusicData() {
//     let cutData = [];
//     for (let i = 0; i < MUSIKQUIZDATA.Music.length; i++) {
//         if (!cutData.includes(MUSIKQUIZDATA.Music[i])) {
//             cutData.push(MUSIKQUIZDATA.Music[i]);
//         }
//     }
//     console.log("cutData", cutData);

// }

function checkAnswerInput(answer) {
    flagMatchData.length++;
    let input = document.getElementById('answer').value;

    document.getElementsByClassName('answer')[0].onclick = null;

    if (input.toLowerCase() == answer.toLowerCase()) {
        flagMatchData.correct++;
        flagMatchData.correctCountries.push(answer);
        document.getElementById('result').innerHTML = `<div class="correct">Correct!</div>`;
        document.getElementById('result').style.opacity = '1';

        PLAYER.user.coins += 3;
        PLAYER.user.XP += 89 / 71;
        document.getElementById('nav-coins').innerHTML = `${PLAYER.user.coins} <img src="../media/Images/coin.png" class="coin-icon">`;

        setTimeout(() => {
            document.getElementById('result').style.opacity = '0';
        }, 2000);

        console.log("MatchData", flagMatchData);
        console.log('Round finished!');

    } else {
        flagMatchData.wrong++;
        flagMatchData.wrongCountries.push(answer);
        document.getElementById('result').innerHTML = `<div class="wrong">Wrong!<br>Correct: ${answer}</div>`;
        document.getElementById('result').style.opacity = '1';

        setTimeout(() => {
            document.getElementById('result').style.opacity = '0';
        }, 2000);

        console.log("MatchData", flagMatchData);
        console.log('Round finished!');
    }

    if (flagMatchData.length < flagLength[game.difficulty]) {
        answers = [];
        setTimeout(() => {
            startGame();
        }, 2300);
    } else {
        setTimeout(() => {
            document.getElementById('image').innerHTML = ``;
            document.getElementsByClassName('answers')[0].innerHTML = ``;
            document.getElementsByClassName('answersInput')[0].innerHTML = ``;
            document.getElementById('result').innerHTML = ``;
            document.getElementById('result').innerHTML = `<div class="correct">You completed the Game! Your stats:</div>`;
            document.getElementById('result').innerHTML += `<div class="correct">Correct: ${flagMatchData.correct}</div>`;
            document.getElementById('result').innerHTML += `<div class="correct">Wrong: ${flagMatchData.wrong}</div>`;
            document.getElementById('result').style.opacity = '1';

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



  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Diese Funktion mischt alle Optionen in MUSIKQUIZDATA
  function shuffleAllQuizOptions(data) {
    ['Music', 'Artist'].forEach(category => {
      data[category].forEach(question => {
        shuffleArray(question.options);
      });
    });
  }

  // Wird direkt beim Seitenladen ausgeführt
  window.addEventListener("DOMContentLoaded", () => {
    shuffleAllQuizOptions(MUSIKQUIZDATA);

    // Optional: zum Testen in der Konsole anzeigen
    console.log(MUSIKQUIZDATA);
  });