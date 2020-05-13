class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("li").on("mouseover", e =>{
      $(e.currentTarget).addClass("change-color")
    }, e => { $(e.currentTarget).removeClass("change-color")
  }
  

  //   $("li").on("click", e=>{
  //     this.game.playMove
  //   })
  // }



  // $el.children().attr("style", "background-color: red");

  // makeMove($square) {
    
  // }

//   setupBoard() {
//     this.$el.append("<ul>")
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         // // debugger;// $("ul").text([i,j])
//         // $("ul").append("<li>");
//         // $("li").attr("value", [i, j]);
//         // $("ul").append($("<li>").attr("value", [i,j]));
//         $("ul").append($("<li>").data({value: [i,j]}))
//         // $("ul").append($("<li>").data({ value: "apple" }))
//         // $("li").attr("value", [i,j]);
//         // $("li").data("value": "3");
//       }
//     }
//   }
// }



module.exports = View;


