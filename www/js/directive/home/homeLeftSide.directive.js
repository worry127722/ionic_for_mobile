angular.module('starter').directive('homeLeftSide', ['$timeout', 'dataService',
    function ($timeout, dataService) {
        return {
            restrict: 'E',
            templateUrl: 'js/directive/home/homeLeftSide.html',
            replace: false,
            link: function ($scope, element, attrs) {
              $scope.items = dataService.items;

              $scope.data = {
                showDelete: false
              };

              $scope.edit = function(item) {
                alert('Edit Item: ' + item.id);
              };
              $scope.share = function(item) {
                alert('Share Item: ' + item.id);
              };

              $scope.moveItem = function(item, fromIndex, toIndex) {
                $scope.items.splice(fromIndex, 1);
                $scope.items.splice(toIndex, 0, item);
              };

              $scope.onItemDelete = function(item) {
                $scope.items.splice($scope.items.indexOf(item), 1);
              };


            },
            controller: function($scope,$element,$timeout) {

            }
        }
    }
])
