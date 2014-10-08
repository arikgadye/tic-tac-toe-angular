'use strict';

angular.module('ticTacToe')
.controller('MainCtrl', function ($scope) {
  var player1 = {
    name: "player1",
    color: '#2ecc71'
  };
  var player2 = {
    name: "player2",  
    color: 'red'
  } 

  $scope.currentPlayer = player1;

  $scope.changePlayers = function(){ 
    
   if ($scope.$parent.currentPlayer.name == 'player1'){
    $scope.$apply(function(){
      $scope.$parent.currentPlayer = player2;
    })
  } else {
    $scope.$apply(function(){
      $scope.$parent.currentPlayer = player1;
    })
  };
}
});