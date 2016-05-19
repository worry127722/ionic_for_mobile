/**
 * Created by wangrui on 16/5/14.
 */
angular.module('starter')

  .controller('News2Ctr',['$scope', 'dataService','$stateParams', '$state', '$rootScope', function($scope, dataService, $stateParams, $state, $rootScope) {
    $scope.name='News2Ctr';
    $scope.chatData = {};
    $rootScope.hideTabs = 'tabs-item-hide';

    for(var i=0; i<dataService.chatData.length; i++){
      if(dataService.chatData[i].id === parseInt($stateParams.id)){
        $scope.chatData = dataService.chatData[i];
        break;
      }
    }

    $scope.back = function () {
      $state.go('tab.news');
    }

    $scope.$on('$destroy', function () {
      $rootScope.hideTabs = '';
    });

  }]);
