'use strict';

angular.module('impactApp')
  .controller('PartenaireCtrl', function($scope, $location, toastr, Partenaire, RequestResource, $state, type) {
    $scope.partenaire = new Partenaire();

    $scope.enterShortId = function(form) {
      if (form.$valid) {
        var shortId = form.shortId.$modelValue;

        $scope.partenaire.$save({shortId: shortId}, function(data) {
          $state.go('partenaire.pj', {shortId: shortId, partenaireId: data._id, type: type});
        },

        function() {
          toastr.error('Impossible de trouver la demande correspondant à la référence ' + shortId, 'Erreur');
        });
      }
    };
  });
