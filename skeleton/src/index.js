const View = require("./ttt-view.js");
const Game = require("../solution/game.js");
  $(() => {
    let game = new Game();
    const $figure = $('.ttt');
    new View(game, $figure);
  });






  // grab the figure element by it's class name (ttt) and then do somethign


// const figure = document.getElementsByClassName("ttt"); //returns a HTML DOM Object

// let view = new View($figure)
// const $figure = $('.ttt'); //returns a jQuery Object

