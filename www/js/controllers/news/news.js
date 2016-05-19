/**
 * Created by wangrui on 16/5/14.
 */
angular.module('starter')

  .controller('NewsCtr',['$scope', 'dataService', function($scope, dataService) {
    $scope.name='NewsCtr';
    $scope.chatData = dataService.chatData;
  }]);
