
'use strict';

angular.module('impactApp')
  .filter('age', function() {
     function calculAge(dateNaiss) {
         var ageDiff = Date.now() - Date.parse(dateNaiss);
         var ageDate = new Date(ageDiff);
         return Math.abs(ageDate.getUTCFullYear() - 1970);
     }
     return function(dateNaiss) {
           return calculAge(dateNaiss);
     };
});

angular.module('impactApp')
  .controller('EvaluationDemandeCtrl', function ($scope, GevaService, DroitService, prestations, questions, request, vieQuotidienne) {
    var situationAnswers = _.indexBy(vieQuotidienne[0].answers, 'value');
    $scope.situationFamiliale = situationAnswers[request.formAnswers.vieQuotidienne.famille];
    $scope.questions = questions;

    $scope.sections = GevaService.getSections();

    _.forEach($scope.sections, function(section){
      section.tooltip = GevaService.getTooltipBySection(section, $scope.questions);
    });

    $scope.computeCompletion = GevaService.computeCompletion;

    if($scope.situationFamiliale.labelRecap){
      $scope.situationFamiliale = $scope.situationFamiliale.labelRecap;
    }
    else {
      $scope.situationFamiliale = $scope.situationFamiliale.label;
    }

    if(request.renouvellement){
      $scope.renouvellement = 'Renouvellement';
    }
    else {
      $scope.renouvellement = 'Première demande';
    }

    $scope.prestations = DroitService.compute(request.formAnswers, prestations);
  });
