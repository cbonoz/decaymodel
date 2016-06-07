'use strict';

/**
 * @ngdoc directive
 * @name decaymodelApp.directive:decayForm
 * @description
 * # decayForm
 */
angular.module('decaymodelApp')
  .directive('decayForm', function () {
    return {
      templateUrl: './scripts/directives/decayform.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the decayForm directive');



      }
    };
  });
