app.directive('board', function(){
	return  {
		restrict: 'E',
		transclude: true,
		template: "<table ng-transclude></table>"
	};
});