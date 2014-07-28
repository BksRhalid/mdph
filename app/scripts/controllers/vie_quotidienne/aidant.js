'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:ConditionAidantCtrl
 * @description
 * # ConditionAidantCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('ConditionAidantCtrl', function($scope, $sessionStorage) {

    $scope.subtitle = 'Souhaitez-vous nous informer des attentes et besoins de votre aidant familial ?';

    var initialRadioModel = ($scope.sectionModel.aidant) ? $scope.sectionModel.aidant.value : '';

    $scope.question = {
      'answers': [
        {
          'label': 'Oui',
          'value': true
        },
        {
          'label': 'Non',
          'value': false
        }
      ],
      radioModel: initialRadioModel,
      setAnswer: function(answer) {
        $scope.sectionModel.aidant = answer;
      }
    };

    $scope.isNextStepDisabled = function() {
      return angular.isUndefined($scope.sectionModel.aidant);
    };

    $scope.nextStep = function() {
      $sessionStorage.sectionAidant.isEnabled = $scope.sectionModel.aidant.value;
      $scope.goToNextSection($scope.currentSection);
    };
  });
