app.directive('row', function(){
	return {
		restrict: 'E',
		templateUrl: '../../views/partials/row.html',
		controller: 'MainCtrl',
		scope: true,
		link: function(scope, element, attrs, MainCtrl) {
			if (scope.$parent.currentPlayer != undefined) {
			var circle = element.find('.circle');
			circle.on('mouseenter', function(e){
				$(e.target).addClass(scope.$parent.currentPlayer.name)
			});
			circle.on('mouseleave', function(e){
				$(e.target).removeClass(scope.$parent.currentPlayer.name)
			});
			circle.on('click', function(e) {
				$(e.target).css('background-color', scope.$parent.currentPlayer.color);
				$(e.target).unbind('mouseenter').unbind('mouseleave')
				$(e.target).unbind('click');
				$(e.target).addClass('disabled')
				var cell = parseInt(e.target.id);
				scope.fillInBoard(cell, scope.$parent.currentPlayer);
				// scope.$parent.board[cell] = scope.$parent.currentPlayer;
				scope.changePlayers();
			});
		}
		}
	};
});
