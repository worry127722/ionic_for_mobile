/**
 * Created by wangrui on 16/5/14.
 */
angular.module('starter')

  .controller('SettingCtr', function($scope) {
    $scope.name='SettingCtr';
    $scope.flag = false;
    $scope.flag2 = true;
    $scope.choice = 'A';
  });
