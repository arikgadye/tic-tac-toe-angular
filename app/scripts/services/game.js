app.factory('GameFactory', function(){
	var game = {};

	game.board = [null,null,null,null,null,null,null,null,null];
	game.winningCombos = [
		[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ];
  game.checkBoard = function() {
    angular.forEach(this.winningCombos, function(combo){
      if (this.board[combo[0]] != null && this.board[combo[1]] != null && this.board[combo[2]] != null) {
          if (this.board[combo[0]].name == this.board[combo[1]].name && this.board[combo[2]].name == this.board[combo[1]].name) {
            this.board[combo[0]].winner = true;
            alert('yay')
          }
      }
    }.bind(this));
  };
  return game;
});