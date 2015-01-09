myApp.controller('TriangleController',
['$scope',
  function ($scope) {
    $scope.triangleCount = 0;
    $scope.addTriangles = function () {
      $scope.triangleCount++;
    };
  }
]);



//fiddle: http://jsfiddle.net/HB7LU/9449/