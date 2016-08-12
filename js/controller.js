angular.module('Arcadia', ['ui.bootstrap', 'ngAside'])

.controller("mainCtrl", function($scope, $timeout, $aside) {
    var totalPictures = 47;
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

    $scope.getRandomNbr = function(digits) {
        var nbr = Integer.valueOf(String.valueOf(Math.floor(Math.random() * (digits * 10) + 1)), 16);
        console.log(nbr);
        return nbr;
    };

    /*
     *  Modal part
     */
    $scope.asideState = {
  open: false
};

$scope.openAside = function(position, backdrop) {
  $scope.asideState = {
    open: true,
    position: position
  };

  function postClose() {
    $scope.asideState.open = false;
  }

  $aside.open({
    templateUrl: 'views/aside.html',
    placement: position,
    size: 'lg',
    backdrop: backdrop,
    controller: function($scope, $uibModalInstance) {
      $scope.ok = function(e) {
        $uibModalInstance.close();
        e.stopPropagation();
      };
      $scope.cancel = function(e) {
        $uibModalInstance.dismiss();
        e.stopPropagation();
      };
    }
  }).result.then(postClose, postClose);
}
})
.controller("timeCtrl", function($scope, $timeout) {
    //$scope.clock = ""; // initialise the time variable
    $scope.clock = Date.now(); // get the current time
    $scope.tickInterval = 1000; //ms
    var getPeriod = function() {
        date = new Date();
//        if (date.getHours() >= 5 && date.getHours() <= 12) {
//            return "morning";
//        }
        if (date.getHours() >= 5 && date.getHours() <= 16) {
            return "jour"
        }
        if ((date.getHours() >= 17 && date.getHours() <= 23) || date.getHours() <= 4) {
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
