/**
 * Created by wangrui on 16/5/14.
 */
angular.module('starter')

  .controller('HomeCtr', ['$scope', '$ionicActionSheet', '$timeout', '$ionicModal', '$ionicPopup', '$ionicSideMenuDelegate', 'dataService', function($scope, $ionicActionSheet, $timeout, $ionicModal, $ionicPopup, $ionicSideMenuDelegate, dataService) {
    $scope.name='HomeCtr';
    $scope.items = dataService.items;
    $ionicModal.fromTemplateUrl('js/controllers/home/home.modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

    $scope.show = function() {

      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>登录</b>' },
          { text: '分享' }
        ],
        destructiveText: '删除',
        titleText: '首页选项',
        cancelText: '取消',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          if(index == 0){
            $scope.openModal();
            return true;
          }else {

          }
        },
        destructiveButtonClicked: function () {
          $scope.showConfirm();
          return true;
        }
      });

      // For example's sake, hide the sheet after two seconds
      // $timeout(function() {
      //   hideSheet();
      // }, 2000);

    };

    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: '删除',
        template: '<div class="text-center">确认删除吗?</div>'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
      // $ionicSideMenuDelegate.toggleRight();
    };



  }]);
