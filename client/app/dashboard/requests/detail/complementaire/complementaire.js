'use strict';

angular.module('impactApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard.requests.detail.complementaire', {
        url: '/complementaire',
        templateUrl: 'components/file-state/fileState.html',
        resolve: {
          currentStepName: function() {
            return 'complementaire';
          },
          nextStepName: function() {
            return 'evaluation';
          }
        },
        controller: 'FileStateCtrl'
      });
  });
