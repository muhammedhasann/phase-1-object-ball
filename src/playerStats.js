function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null;
    function bigShoeRebounds() {
        const game = gameObject();
        let maxShoeSize = -Infinity;
        let playerWithMaxShoe = null;
        for (const team in game) {
            for (const player in game[team].players) {
                if (game[team].players[player].shoe > maxShoeSize) {
                    maxShoeSize = game[team].players[player].shoe;
                    playerWithMaxShoe = player;
                }
            }
        }
        if (playerWithMaxShoe) {
            return game.home.players[playerWithMaxShoe].rebounds;
        }
        return null;
    }

    // Bonus Questions
    function mostPointsScored() {
        const game = gameObject();
        let maxPoints = -Infinity;
        let playerWithMaxPoints = null;
        for (const team in game) {
            for (const player in game[team].players) {
                if (game[team].players[player].points > maxPoints) {
                    maxPoints = game[team].players[player].points;
                    playerWithMaxPoints = player;
                }
            }
        }
        return playerWithMaxPoints;
    }

    function winningTeam() {
        const game = gameObject();
        let homePoints = 0;
        let awayPoints = 0;
        for (const player in game.home.players) {
            homePoints += game.home.players[player].points;
        }
        for (const player in game.away.players) {
            awayPoints += game.away.players[player].points;
        }
        return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
    }

    function playerWithLongestName() {
        const game = gameObject();
        let longestName = "";
        for (const team in game) {
            for (const player in game[team].players) {
                if (player.length > longestName.length) {
                    longestName = player;
                }
            }
        }
        return longestName;
    }

    // Super Bonus
    function doesLongNameStealATon() {
        const longestName = playerWithLongestName();
        const player = playerStats(longestName);
        return player.steals > 10;
    }
}
