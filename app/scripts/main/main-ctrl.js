'use strict';

angular.module('ticTacToe')
.controller('MainCtrl', function ($scope, $rootScope, $location, GameFactory) {
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

  $rootScope.done = false;
  $scope.exit = function() {
    $rootScope.done=false;
    GameFactory.freezeBoard();
  }
  $scope.playAgain = function() {
    GameFactory.clearBoard();
    $rootScope.done = false;
  }
  $rootScope.winner = undefined;
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
  