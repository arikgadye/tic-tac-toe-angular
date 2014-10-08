app.directive('modal', function(){
	return {
		restrict: 'E',
		templateUrl: '../../views/partials/modal.html',
		scope: true
		// controller: function(){
		// 	var method = {},
		// 	$overlay,
		// 	$modal,
		// 	$content,
		// 	$close;
		// 	method.center = function(){}
		// 	method.open = function(){}
		// 	method.close = function(){}
		// 	return method;
		// },
	};
});
