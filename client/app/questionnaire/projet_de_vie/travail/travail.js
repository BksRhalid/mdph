'use strict';

angular.module('impactApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('departement.questionnaire.projet_de_vie.travail', {
        url: '/travail',
        template: '<subsection/><ui-view/>',
        controller: 'TravailCtrl',
      });
  });
