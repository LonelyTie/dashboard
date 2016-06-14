angular.module('Arcadia.controller', [])

.controller("mainCtrl", function($scope) {
    $scope.test = {"test" :"1", "2": "cool", "3" : "awesome"};
	$scope.callImgs = function() {
		var img = Math.floor((Math.random() * 37) + 1);
		return img;
	};
});
