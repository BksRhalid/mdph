'use strict';

angular.module('impactApp')
  .controller('ProjetDeVieCtrl', function ($scope, $state, datepickerConfig, QuestionService, $window, SectionConstants, isAdult) {


    $scope.sections = $scope.currentRequest.renouvellement ? SectionConstants : _.where(SectionConstants, {'renew': undefined});

    $scope.encode = function(json) {
      return encodeURIComponent(JSON.stringify(json));
    };
  });
