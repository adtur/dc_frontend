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
