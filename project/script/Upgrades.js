let risc = 1;
let streak = 0;
let countStreak = false;

function randomItem() {
    let rnd = Math.floor(Math.random() * 4);

    switch (rnd) {
        case 0:
            Hint();
            break
        case 1:
            Skip();
            break
        case 2:
            DoppeltePunkte();
            break
        case 3:
            StreakBoost();
            break
    }
}


function Hint() {

}

function Skip() {
    setTimeout(() => {
        startGame();
    }, 300);

    removeItem("Skip");
}

function DoppeltePunkte() {
    risc = 2;

    removeItem("Doppelte Punkte");
}

function StreakBoost() {
    countStreak = true;
    streak = 1;

    removeItem("Streak Boost");
}

function endStreak() {
    countStreak = false;
    streak = 1;
}

function removeItem(item) {
    let user = JSON.parse(localStorage.getItem("loggedPlayer")) || { isLoggedIn: false, user: {}, time: new Date(new Date) };
    let player = JSON.parse(localStorage.getItem("playerData")) || [];

    console.log(user);
    console.log(player);

    if (user.isLoggedIn) {
        for (i = 0; i < user.user.inventory.length; i++) {
            if (user.user.inventory[i] === item) {
                user.user.inventory.quantity[i] -= 1;
                if (user.user.inventory.quantity[i] <= 0) {
                    user.user.inventory.splice(i, 1);
                }
            }
        }
    }


    let index = player.findIndex(element => element.username === user.user.username);

    if (index !== -1) {
        console.error("User found in playerData array.");
    }

    player[index] = user;

    localStorage.setItem("loggedUser", JSON.stringify(user));
    localStorage.setItem("playerData", JSON.stringify(player));
}