'use strict';

/**
 * @ngdoc function
 * @name decaymodelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the decaymodelApp
 */
angular.module('decaymodelApp')
  .controller('MainCtrl', function ($scope) {

    $scope.decayFactor = 50;
    $scope.maxLines = 501;
    $scope.changes = 25;
    $scope.renderPlot = 0;

    var maxLines = $scope.maxLines;

    //for slider limit update
    $scope.$watch('maxLines', function(current, old){
        maxLines = current;
        $scope.changeOptions = {floor: 0, ceil: maxLines};
    });


    $scope.dummy = () => {
        console.log("dummy called");
    }


    $scope.changeOptions = {floor: 0, ceil: maxLines};

    $scope.loadPlot = () => {
        $scope.renderPlot += 1;

        console.log("renderPlot " + $scope.renderPlot)
        console.log("decayFactor " + $scope.decayFactor);
        console.log("maxlines " + $scope.maxLines);
        console.log("number of changes " + $scope.changes);
        // console.log("cont " + $scope.cont);

    }



    // $scope.$on("slideEnded", function() {
    //  // user finished sliding a handle
    //  console.log("slideEnded");
     
    //  if ($scope.cont)
    //      $scope.loadPlot();
    // });


  });
