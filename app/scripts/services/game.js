app.factory('GameFactory', function($rootScope){
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
					$rootScope.done = true;
					$rootScope.winner = this.board[combo[0]];
				}
			}
		}.bind(this));
	};
	game.freezeBoard = function(){
		$('.circle').unbind('mouseenter').unbind('mouseleave');
		$('.circle').unbind('click');
		$('.circle').addClass('disabled')
	}
	game.clearBoard = function() {
		this.board = [null,null,null,null,null,null,null,null,null]
		$('.circle').removeClass("player1")
		$('.circle').removeClass("player2")
		$('.circle').removeClass("disabled")
		$('.circle').bind('mouseenter');
		$('.circle').bind('mouseleave')
	}
	return game;
});