'use strict';

angular.module('ticTacToe')
.controller('MainCtrl', function ($scope) {
  var player1 = {
    name: "player1",
    color: '#2ecc71',
    solved: [],
    winner: false
  };
  var player2 = {
    name: "player2",  
    color: 'red',
    solved: [],
    winner: false
  }; 

  $scope.checkBoard = function() {
    console.log(player1.solved)
    // for (var i in $scope.winningSolutions) {
    //     if ($scope.board[$scope.winningSolutions[i][0]] == $scope.board[$scope.winningSolutions[i][1]] == $scope.board[$scope.winningSolutions[i][2]]){
    //       alert('yay');
    //     };
    //     // console.log($scope.board[$scope.winningSolutions[i][0]])
    //     // console.log($scope.board[$scope.winningSolutions[i][1]])
    //     // console.log($scope.board[$scope.winningSolutions[i][2]])
    //   }
    };
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
  $scope.currentPlayer = player1;

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