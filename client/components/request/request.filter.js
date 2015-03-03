'use strict';

angular.module('impactApp')
  .filter('requestStatus', function () {
    return function (input) {
      if (!input) {
        return 'Nouvelle demande';
      }

      switch (input) {
        case 'en_cours':
          return 'En cours';
        default:
          return 'TODO';
      }
    };
  });
