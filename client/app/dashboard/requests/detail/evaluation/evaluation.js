'use strict';

angular.module('impactApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard.requests.detail.evaluation', {
        url: '/evaluation',
        templateUrl: 'app/dashboard/requests/detail/evaluation/evaluation.html',
        controller: 'RequestEvaluationCtrl',
        resolve: {
          sections: function(GevaService) {
            return GevaService.getSections();
          },

          model: function(GevaService) {
            return GevaService.getModel();
          }
        },
        authenticate: true
      })
      .state('dashboard.requests.detail.evaluation.section', {
        url: '/:sectionId',
        templateUrl: 'app/dashboard/requests/detail/evaluation/section/section.html',
        controller: 'RequestSectionCtrl',
        resolve: {
          section: function($stateParams, sections, model) {
            var id = $stateParams.sectionId;
            var section = _.find(sections, {id: id});

            return {
              id: section.id,
              label: section.label,
              trajectoires: model[section.libelle]
            };
          }
        },
        authenticate: true
      });
  });
