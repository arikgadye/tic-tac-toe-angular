'use strict';

angular.module('ticTacToe')
.controller('MainCtrl', function ($scope) {
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

  $scope.board = [null,null,null,null,null,null,null,null,null,]
  $scope.winningSolutions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ]
  $scope.checkBoard = function() {
    angular.forEach($scope.$parent.winningSolutions, function(combo){
      var board = $scope.$parent.board;
      if (board[combo[0]] != null && board[combo[1]] != null && board[combo[2]] != null) {
          if (board[combo[0]].name == board[combo[1]].name && board[combo[2]].name == board[combo[1]].name) {
            board[combo][0].winner = true;
          }
      }
    });
  };
  $scope.currentPlayer = player1;
  $scope.player1 = player1
  $scope.player2 = player2
  $scope.changePlayers = function(){ 
   if ($scope.$parent.currentPlayer.name == 'player1'){
    $scope.$apply(function(){
      $scope.$parent.currentPlayer = player2;
    });
  } else {
    $scope.$apply(function(){
      $scope.$parent.currentPlayer = player1;
    });
  };
}
});