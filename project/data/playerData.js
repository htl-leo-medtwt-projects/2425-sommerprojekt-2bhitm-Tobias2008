let PLAYER_DATA = JSON.parse(localStorage.getItem('playerData')) ?? {
    "username": "",
    "password": "",
    "avatar": "",
    "coins": 0,
    "level": 1,
    "XP": 0,
    "XPToLevelUp": 100,
    "inventory": [],
    "achievements": [],
    "quests": [],
}