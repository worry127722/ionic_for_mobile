// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
// 'ionic-native-transitions'

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // $ionicNativeTransitionsProvider.setDefaultOptions({
    //   duration: 200, // in milliseconds (ms), default 400,
    //   slowdownfactor: 4, // overlap views (higher number is more) or no overlap (1), default 4
    //   iosdelay: -1, // ms to wait for the iOS webview to update before animation kicks in, default -1
    //   androiddelay: -1, // same as above but for Android, default -1
    //   winphonedelay: -1, // same as above but for Windows Phone, default -1,
    //   fixedPixelsTop: 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
    //   fixedPixelsBottom: 0, // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
    //   triggerTransitionEvent: '$ionicView.afterEnter', // internal ionic-native-transitions option
    //   backInOppositeDirection: false // Takes over default back transition and state back transition to use the opposite direction transition to go back
    // });
    //
    // $ionicNativeTransitionsProvider.setDefaultTransition({
    //   type: 'slide',
    //   direction: 'left'
    // });
    //
    // $ionicNativeTransitionsProvider.setDefaultBackTransition({
    //   type: 'slide',
    //   direction: 'right'
    // });




    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        // nativeTransitions: null,
        templateUrl: "js/controllers/tabs/tabs.html"
      })

      // Each tab has its own nav history stack:

      .state('tab.home', {
        url: '/home',
        // nativeTransitions: null,
        views: {
          'tab-home': {
            templateUrl: 'js/controllers/home/home.html',
            controller: 'HomeCtr'
          }
        }
      })
      .state('tab.news', {
        url: '/news',
        // nativeTransitions: null,
        views: {
          'tab-news': {
            templateUrl: 'js/controllers/news/news.html',
            controller: 'NewsCtr'
          }
        }
      })
      .state('tab.newsinfo', {
        url: '/newsinfo/:id',
        // nativeTransitions: null,
        views: {
          'tab-news': {
            templateUrl: 'js/controllers/news/news2.html',
            controller: 'News2Ctr'
          }
        }
      })
      .state('tab.setting', {
        url: '/setting',
        // nativeTransitions: null,
        views: {
          'tab-setting': {
            templateUrl: 'js/controllers/setting/setting.html',
            controller: 'SettingCtr'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

  });
