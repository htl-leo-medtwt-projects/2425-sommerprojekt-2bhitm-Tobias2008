let PLAYER_DATA = JSON.parse(localStorage.getItem('playerData')) ?? {
    "Username": "",
    "Password": "",
    "Avatar": "",
    "Coins": 0,
    "Level": 1,
    "XP": 0,
    "XPToLevelUp": 100,
    "Inventory": [],
    "Achievements": [],
    "Quests": [],
}