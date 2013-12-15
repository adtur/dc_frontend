function MyCtrl($scope) {
  $scope.visible = true;

  $scope.toggle = function() {
    $scope.visible = !$scope.visible;
  };

  $scope.isVisible = function() {
    return $scope.visible === true;
  };
}

function MyCtrl2($scope) {
  $scope.value = 1;

  $scope.incrementValue = function(value) {
    $scope.value += 1;
  };

  $scope.getIncrementedValue = function() {
    return $scope.value + 1;
  }
}

function MyCtrl3($scope) {
  $scope.name = "";

  $scope.$watch("name", function(newValue, oldValue) {
    if($scope.name.length > 0) {
      $scope.greeting = "Greetings " + $scope.name;
    }
    else {
      $scope.greeting = "";
    }
  });
}
