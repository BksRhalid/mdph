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

    if (angular.isUndefined($scope.$storage.travail.answers.emploi)) {
      $scope.$storage.travail.answers.emploi = {
        label: 'Emploi, détails',
        answers: {}
      };
    }

    $scope.sectionModel = $scope.$storage.travail.answers.emploi.answers;
  });
