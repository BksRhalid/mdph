'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:SansEmploiCtrl
 * @description
 * # SansEmploiCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('SansEmploiCtrl', function($scope) {

    if (angular.isUndefined($scope.sectionModel.sansEmploi)) {
      $scope.sectionModel.sansEmploi = {
        label: 'Sans emploi, détails',
        answers: {}
      };
    }

    $scope.sectionModel = $scope.sectionModel.sansEmploi.answers;
  });
