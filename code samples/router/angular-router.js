angular.module('app', []).config([
  '$routeProvider', function ($routeProvider) {
    $routeProvider.when(
      '/triangle/:triangleId', {
        templateUrl: 'triangle.html',
        controller: 'triangleController'
      });
}]);

