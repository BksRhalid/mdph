'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:SituationsUrgentesCtrl
 * @description
 * # SituationsUrgentesCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('SituationsUrgentesCtrl', function ($scope) {

    if (angular.isUndefined($scope.sectionModel.situationsUrgentes)) {
      $scope.sectionModel.situationsUrgentes = {
        label: 'Situations urgentes',
        answers: {}
      };
    }

    $scope.sectionModel = $scope.sectionModel.situationsUrgentes.answers;
  });
