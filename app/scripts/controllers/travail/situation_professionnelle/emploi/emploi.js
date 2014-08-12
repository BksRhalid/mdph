'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:EmploiCtrl
 * @description
 * # EmploiCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('EmploiCtrl', function($scope) {

    if (angular.isUndefined($scope.sectionModel.emploi)) {
      $scope.sectionModel.emploi = {
        label: 'Emploi, détails',
        answers: {}
      };
    }

    $scope.sectionModel = $scope.sectionModel.emploi.answers;
  });
