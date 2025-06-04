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

// function Hint() {

// }

function Skip() {
    console.log("Skip called");
    if (!checkItem("Skip")) {
        return;
    }

    setTimeout(() => {
        startGame();
    }, 300);

    removeItem("Skip");
}

function DoppeltePunkte() {
    console.log("Doppelte Punkte called");
    if (!checkItem("Doppelte Punkte")) {
        return;
    }
    double = 2;

    removeItem("Doppelte Punkte");
}

function risiko() {
    console.log("Risiko called");
    if (!checkItem("Risiko-Boost")) {
        return;
    }
    risc = 2;

    removeItem("Risiko-Boost");
}

function StreakBoost() {
    console.log("Streak Boost called");
    if (!checkItem("Streak Boost")) {
        return;
    }
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