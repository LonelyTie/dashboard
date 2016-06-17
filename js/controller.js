angular.module('Arcadia')

.controller("mainCtrl", function($scope, $timeout) {
    var totalPictures = 38;
    $scope.login = "Monsieur";
	$scope.callImgs = function() {
		var nbr = Math.floor((Math.random() * totalPictures) + 1);
		$scope.image = nbr;
	};
    $scope.setQuoteHover = function() {
        $scope.quoteHover = true;
    };
    $scope.setQuoteLeave = function() {
        $scope.quoteHover = false;
    };
    $scope.quoteHover = false;
    $scope.fadein = false;
    $timeout(function () {
        $scope.fadein = true;
        console.log("2")
    }, 0);
})
.controller("timeCtrl", function($scope, $timeout) {
    //$scope.clock = ""; // initialise
     the time variable
    $scope.clock = Date.now(); // get the current time
    $scope.tickInterval = 1000; //ms
    var getPeriod = function() {
        date = new Date();
//        if (date.getHours() >= 5 && date.getHours() <= 12) {
//            return "morning";
//        }
        if (date.getHours() >= 5 && date.getHours() <= 18) {
            return "jour"
        }
        if (date.getHours() >= 19 && date.getHours() <= 4) {
            return "soir";
        }
    }
    $scope.period = getPeriod();

    var tick = function () {
        $scope.clock = Date.now() // get the current time
        $scope.period = getPeriod();
        $timeout(tick, $scope.tickInterval); // reset the timer
    }
    $timeout(tick, $scope.tickInterval);
});
