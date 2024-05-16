function updateGame(gameId) {
    const gameInfo = getGameInfo(gameId);

    // Update game information based on gameId
    // document.getElementById('gameIMG').src = gameInfo.imgSrc;
    // document.getElementById('gameTitle').textContent = gameInfo.title;
    // document.getElementById('gameDesc').textContent = gameInfo.description;
    document.getElementById('box').src = gameInfo.imgSrc;
}

// Helper function to retrieve game information based on gameId
function getGameInfo(gameId) {
    switch (gameId) {
        case 'game1':
            return {
                imgSrc: 'img/AlienCt.png',
                vSrc: 'https://www.youtube.com/embed/nVnLO6Y2Hdk?si=6AJ3sIMrTiGWh_8V&amp',
                gSrc: 'https://markkuinkinen.github.io/Game/index.html'
                
            };
        case 'game2':
            return {
                imgSrc: 'img/OrbinTime.png',
                vSrc: 'https://www.youtube.com/embed/_1mI_MjGDyQ?si=APyQuZl_mQrykwvz'
                
     
    }
}
}

function openTab(e){
    if(e == 'game'){
        document.getElementById('Game').style.display = 'block';
        document.getElementById('Map').style.display = 'none';
        
    }
    if(e == 'map'){
        document.getElementById('Game').style.display = 'none';
        document.getElementById('Map').style.display = 'block';
    }
        
}

function openWeb() {
    window.open('https://markkuinkinen.itch.io/dank-sole');

}

function showInfo() {
    // const gameInfo = getGameInfo(gameId);
    document.getElementById('videotab').style.display = 'none';
    document.getElementById('gameDesc').style.display = 'block';
    document.getElementById('gametab').style.display = 'none';
    document.getElementById('gameFrame').src = '';

}

function playGame(gameId) {
    const game = getGameInfo(gameId);
    document.getElementById('videotab').style.display = 'none';
    document.getElementById('gameDesc').style.display = 'none';
    document.getElementById('gametab').style.display = 'block';
    document.getElementById('gameFrame').src = game.gSrc;
    
}


function playVideo(gameId) {
    const gameVid = getGameInfo(gameId);
    document.getElementById('videotab').style.display = 'block';
    document.getElementById('gameDesc').style.display = 'none';
    document.getElementById('gametab').style.display = 'none';
    document.getElementById('gameFrame').src = '';
    document.getElementById('GameVideo').src = gameVid.vSrc;
}
    // Define game information based on gameId
    // switch (gameId) {
    //     case 'game1':
    //         return {
    //             imgSrc: 'img/alien.png',
    //             title: 'Alien Catacombs',
    //             description: 'Top down survival shooter where the player must defeat hordes of enemies to survive. Collect crystals for upgrades to make it easier to achieve a high score. Controls WASD - Move Left Click (LMB) - Shoot (you can hold it down) Space - Dash (if unlocked) ESC - Bring up menu'
    //         };
    //     case 'game2':
    //         return {
    //             imgSrc: 'img/orbin.png',
    //             title: 'Orbin Time',
    //             description: 'You are the hero of this story, your mission is to collect orbs of power through helping the villagers by completing quests and succeeding in mini games.'
    //         };
    //     case 'game3':
    //         return {
    //             imgSrc: 'img/game3.png',
    //             title: 'Game 3 Title',
    //             description: 'Description for Game 3...'
    //         };
    //     default:
    //         return {
    //             imgSrc: 'img/placeholderbox.png',
    //             title: 'Game Title',
    //             description: 'Game Description'
    //         };
    // }
