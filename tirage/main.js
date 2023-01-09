let players = [];
let btnAddName = document.querySelector('.addname');
let btnTirage = document.querySelector('.tirage');

function addPlayer() {
    let name = prompt('Nom du joueur');
    players.push(name);
    console.log(players);
}
btnAddName.addEventListener('click', addPlayer);

function tirageGagnant() {
    let randomIndex = Math.floor(Math.random() * players.length);
    let gagnant = players[randomIndex];
    alert(gagnant + ' a gagné !');
}
btnTirage.addEventListener('click', tirageGagnant);
