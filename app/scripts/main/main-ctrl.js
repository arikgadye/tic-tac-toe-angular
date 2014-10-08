'use strict';

angular.module('ticTacToe')
.controller('MainCtrl', function ($scope, GameFactory) {
  var player1 = {
    name: "player1",
    color: '#2ecc71',
    winner: false
  };
  var player2 = {
    name: "player2",  
    color: 'red',
    winner: false
  }; 

  $scope.currentPlayer = player1;

  $scope.fillInBoard = function(cell, player) {
    GameFactory.board[cell] = player;
    GameFactory.checkBoard();
  }
  $scope.changePlayers = function(){ 
   if ($scope.$parent.currentPlayer.name == 'player1'){
    $scope.$apply(function(){
      $scope.$parent.currentPlayer = player2;
    });
  } else {
    $scope.$apply(function(){
      $scope.$parent.currentPlayer = player1;
    });
  }
};
});
  