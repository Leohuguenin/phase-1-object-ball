function gameObject() {
    return object = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            }
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordo": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        }
    }
}

function numPointsScored(playerName) {
    const data = gameObject();
    let players = {};
    for (const key in data) {
        players = data[key].players;
        if (playerName in players)
            return players[playerName].points;
    }
}

function shoeSize(playerName) {
    const data = gameObject();
    let players = {};
    for (const key in data) {
        players = data[key].players;
        if (playerName in players)
            return players[playerName].shoe;
    }
}



function teamColors(teamName) {
    const data = gameObject();
    for (const key in data) {
        if (data[key].teamName === teamName)
            return data[key].colors
    }
}



function teamNames() {
    let data = gameObject();
    return [data.home.teamName, data.away.teamName];
}


function playerNumbers(team) {
    const data = gameObject();
    let jersey = [];
    for (const key in data) {
        if (data[key].teamName === team) {
            for (const playerKey in data[key].players) {
                jersey.push(data[key].players[playerKey].number)
            }
        }
    }
    return jersey;
}

console.log(playerNumbers('Brooklyn Nets'));

function playerStats(playerName) {
    const data = gameObject();
    let players = {};
    for (const key in data) {
        players = data[key].players;
        if (playerName in players)
            return players[playerName];
    }
}


function bigShoeRebounds() {

    const data = gameObject();
    let biggest = 0;
    let players = {};
    let player;
    for (const key in data) {
        players = data[key].players;
        for (const playerKey in players) {
            if (players[playerKey].shoe > biggest) {
                biggest = players[playerKey].shoe;
                player = players[playerKey];
            }

        }
    }

    return player.rebounds;
}

function mostPointsScored() {
    const data = gameObject();
    let highestPoint = 0;
    let player;
    for (const key in data) {
        for (const playerKey in data[key].players) {
            if (data[key].players[playerKey].points > highestPoint) {
                highestPoint = data[key].players[playerKey].points;
                player = playerKey;
            }
        }
    }
    return player;
}

function winningTeam() {
    const data = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    let homeTeam = data.home.teamName;
    let awayTeam = data.away.teamName;
    for (const key in data.home.players) {
        homePoints += data.home.players[key].points;
    }
    for (const key in data.away.players) {
        awayPoints += data.away.players[key].points;
    }

    if (homePoints > awayPoints)
        return homeTeam;
    else if (awayPoints > homePoints)
        return awayTeam;

}



function playerWithLongestName() {
    const data = gameObject();
    let nameLenght = 0;
    let playerName;
    for (const key in data) {
        for (const playerKey in data[key].players) {
            if (playerKey.length > nameLenght) {
                nameLenght = playerKey.length;
                playerName = playerKey;
            }
        }
    }
    return playerName;
}

console.log(playerWithLongestName());

function doesLongNameStealATon() {
    const data = gameObject();
    const name = playerWithLongestName();
    let playerWithLongestNameSteals = 0

    for (const key in data) {
        if (name in data[key].players) {
            playerWithLongestNameSteals = data[key].players[name].steals;
        }
    }
    for (const key in data) {
        for (const playerKey in data[key].players) {
            if (data[key].players[playerKey].steals > playerWithLongestNameSteals)
                return false;
        }
    }
    return true;
}

console.log(doesLongNameStealATon());