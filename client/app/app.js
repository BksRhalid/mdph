'use strict';

angular.module('impactApp', [
    'impactApp.auth',
    'impactApp.constants',
    'impactApp.util',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ngStorage',
    'ngAnimate',
    'ngFileUpload',
    'ngMessages',
    'chart.js',
    'ui.tree',
    'toastr',
    'ui.mask'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $urlMatcherFactoryProvider, $modalProvider, toastrConfig, treeConfig) {
    moment.locale('fr');
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $urlMatcherFactoryProvider.strictMode(false);
    $modalProvider.options.animation = false;
    angular.extend(toastrConfig, {
      progressBar: true,
      positionClass: 'toast-top-right'
    });
    treeConfig.dragClass = 'angular-ui-tree-drag';
  })
  .run(function($rootScope, $window, $location) {
    $rootScope.$on('$stateChangeSuccess', function() {
      window.scrollTo(0, 0);

      if ($window._paq) {
        $window._paq.push(['setCustomUrl', $location.path()]);
        $window._paq.push(['trackPageView']);
      }
    });
  });
