'use strict';

angular.module('impactApp').config(function($stateProvider) {
  $stateProvider.state('espace_perso.mes_profils.profil.demande', {
    url: '/demande/:shortId',
    authenticate: true,
    data: {
      title: 'Détail de la demande'
    },

    resolve: {
      shortId: function($stateParams) {
        return $stateParams.shortId;
      },

      request: function(RequestResource, shortId) {
        return RequestResource.get({shortId: shortId}).$promise;
      },

      prestations: function($http) {
        return $http.get('api/prestations').then(function(result) {
          return _.map(result.data, function(element) {
            return _.extend({}, element, {choice: 'false'});
          });
        });
      },
    },

    views: {
      '': {
        templateUrl: 'app/espace_perso/mes_profils/profil/demande/demande.html',
        controller: 'DemandeCtrl'
      },
      'choix_mdph@espace_perso.mes_profils.profil.demande': {
        templateUrl: 'app/espace_perso/mes_profils/profil/demande/choix_mdph/choix_mdph.html',
        controller: function($scope, enabledMdphs, currentMdph, fullMdphList, request) {
          $scope.enabledMdphs = enabledMdphs;
          $scope.fullMdphList = fullMdphList;

          if (!request.mdph) {
            request.mdph = currentMdph.zipcode;
          }

          $scope.request = request;

          $scope.resetOldMdph = function() {
            request.old_mdph = null;
            request.numeroDossier = null;
          };
        },

        resolve: {
          fullMdphList: function(MdphService) {
            return MdphService.getFullMdphList();
          },

          enabledMdphs: function(fullMdphList) {
            return _.filter(fullMdphList, {enabled: true});
          }
        }
      },
      'documents@espace_perso.mes_profils.profil.demande': {
        templateUrl: 'app/espace_perso/mes_profils/profil/demande/documents/documents.html',
        controller: 'DocumentsCtrl',
        resolve: {
          documentTypes: function(DocumentTypeResource) {
            return DocumentTypeResource.query().$promise;
          }
        }
      },
      'suggestions@espace_perso.mes_profils.profil.demande': {
        templateUrl: 'app/espace_perso/mes_profils/profil/demande/documents/suggestions.html',
        controller: function($scope, PreparationEvaluationService, request) {
          $scope.docsList = PreparationEvaluationService.getSuggestedDocsList(request.formAnswers);
        }
      },
      'prestations@espace_perso.mes_profils.profil.demande': {
        templateUrl: 'app/espace_perso/mes_profils/profil/demande/prestations/prestations.html',
        controller: function($scope, prestations) {
          $scope.types = _.groupBy(prestations, 'type');
        }
      },
      'validation@espace_perso.mes_profils.profil.demande': {
        templateUrl: 'app/espace_perso/mes_profils/profil/demande/validation/validation.html',
        controller: function($scope, RequestService, ProfileService, request, profile, currentUser) {
          $scope.currentUser = currentUser;

          $scope.isReadyToSend = function() {
            return ProfileService.getCompletion(profile) && RequestService.getCompletion(request) && !currentUser.unconfirmed;
          };

          $scope.getProfileCompletion = function() {
            return ProfileService.getCompletion(profile);
          };

          $scope.getDocumentsCompletion = function() {
            return RequestService.getCompletion(request);
          };
        }
      }
    }
  });
});
