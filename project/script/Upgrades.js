let risc = 1;
let streak = 1;
let countStreak = false;
let double = 1;

function randomItem() {
    console.log("randomItem called");

    if (!checkItem("Random hilfe")) {
        return;
    }

    let rnd = Math.floor(Math.random() * 4);

    switch (rnd) {
        case 0:
            Hint('rnd');
            break
        case 1:
            Skip('rnd');
            break
        case 2:
            DoppeltePunkte('rnd');
            break
        case 3:
            StreakBoost('rnd');
            break
    }
}

// function Hint() {

// }

function Skip(type) {
    if (type === 'rnd') {
        console.log("Random Skip called");
    } else {
        console.log("Skip called");
        if (!checkItem("Skip")) {
            return;
        }
    }

    setTimeout(() => {
        startGame();
    }, 300);

    if (type === 'rnd') {
        removeItem("Random hilfe");
    } else {
        removeItem("Skip");
    }
}

function DoppeltePunkte(type) {
    console.log("Doppelte Punkte called");

    if (type === 'rnd') {
        console.log("Random Doppelte Punkte called");
    } else {
        if (!checkItem("Doppelte Punkte")) {
            return;
        }
    }

    double = 2;

    if (type === 'rnd') {
        removeItem("Random hilfe");
    } else {
        removeItem("Doppelte Punkte");
    }

}

function risiko(type) {
    console.log("Risiko called");
 
    if (type === 'rnd') {
        console.log("Random Risiko called");
    } else {
        if (!checkItem("Risiko-Boost")) {
            return;
        }
    }

    risc = 2;

    if (type === 'rnd') {
        removeItem("Random hilfe");
    } else {
        removeItem("Risiko-Boost");
    }

}

function StreakBoost(type) {
    console.log("Streak Boost called");

    if (type === 'rnd') {
        console.log("Random Streak Boost called");
    } else {
        if (!checkItem("Streak Boost")) {
            return;
        }
    }

    countStreak = true;
    streak = 1;

    if (type === 'rnd') {
        removeItem("Random hilfe");
    }
    else {
        removeItem("Streak Boost");
    }
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

function checkItem(item) {
    let user = JSON.parse(localStorage.getItem("loggedPlayer")) || { isLoggedIn: false, user: {}, time: new Date(new Date) };

    if (user.isLoggedIn) {
        for (i = 0; i < user.user.inventory.length; i++) {
            if (user.user.inventory[i].name === item && user.user.inventory[i].quantity > 0) {
                console.log("Item found in inventory:", item);

                return true;
            }
        }
    }

    console.log(user.user.inventory);
    console.log("Item not found in inventory:", item);
    return false;
}