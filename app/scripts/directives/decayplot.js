'use strict';

/**
 * @ngdoc directive
 * @name decaymodelApp.directive:decayPlot
 * @description
 * # decayPlot
 */
angular.module('decaymodelApp')
  .directive('decayPlot', function () {
    return {
      template: '<div id="main-plot"></div>',
      restrict: 'E',
      replace: true,
      // scope: false, //inherit the scope
      link: function postLink(scope, element, attrs) {
        // element.text('this is the decayPlot directive');


   
    

        function range(start, stop, step){
          let a=[start], b=start;
          while(b<stop){b+=step;a.push(b)}
          return a;
        };

        function randomRange(n,bottom, top) {
          let f = getRandomizer(bottom,top);
          let a = [];
          for (var i = 0; i < n; i++) { 
              a.push(f());
          }
          return a;
        }

        function getRandomizer(bottom, top) {
          return function() {
              return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
          }
        }
        function computeYScale (width, height, xScale) {
          var xDiff = xScale[1] - xScale[0]
          var yDiff = height * xDiff / width
          return [-yDiff / 2, yDiff / 2]
        }



        var width = 1200;//window.innerWidth
        var height = 800;//window.innerHeight

        // desired xDomain values
        // var xScale = [1];

        // var DECAY_FACTOR = scope.decayFactor;
        //     var MAX_LINE = scope.maxLines;

        //     //get set of unique change points
        //     var CHANGE_POINTS = Array.from(new Set(randomRange(scope.changes,1, MAX_LINE)));


        //     //sums decay contributions of all change points
        //     var decayFunc = CHANGE_POINTS.map((p) => { return "abs(" + DECAY_FACTOR + "/((x- x%1)-" + p + "))"; }).join(" + ");

        //     //used to remove singularities
        //     var cond = CHANGE_POINTS.map((p) => { return "(abs(x-" + p + ") < 1.5)";}).join(" || ");
            
        //     //superposition and set limits
        //     var totalDecay = "(" + cond + ") ? 100 : max(0.1,100 - (" + decayFunc + ")) + ((" + decayFunc + ")%1)";

        //     console.log(totalDecay);


        //  functionPlot({
        //       width: width,
        //       height: height,
        //       title: "Comment Health vs. Line in Program",
        //       disableZoom: true,
        //       xAxis: {domain: [0, MAX_LINE], label: "Code Line Number"},
        //       yAxis: {domain: [0,100], label: "Comment Health"},
        //       // xDomain: xScale,
        //       // yDomain: [0, 100],//computeYScale(width, height, xScale),

        //       target: '#main-plot',
        //       data: [{
        //         fn: totalDecay,
        //         // derivative: {
        //         //   fn: '2x',
        //         //   updateOnMouseMove: true
        //         // },
        //         color: "#00ff00"
        //       }]
        //     })

         scope.$watch('renderPlot', function() {


            var DECAY_FACTOR = scope.decayFactor;
            var MAX_LINE = scope.maxLines;

            //get set of unique change points
            var CHANGE_POINTS = Array.from(new Set(randomRange(scope.changes,1, MAX_LINE)));


            //sums decay contributions of all change points
            var decayFunc = CHANGE_POINTS.map((p) => { return "abs(" + DECAY_FACTOR + "/((x- x%1)-" + p + "))"; }).join(" + ");

            //used to remove singularities
            var cond = CHANGE_POINTS.map((p) => { return "(abs(x-" + p + ") < 1.5)";}).join(" || ");
            
            //superposition and set limits
            var totalDecay = "(" + cond + ") ? 100 : max(0.1,100 - (" + decayFunc + ")) + ((" + decayFunc + ")%1)";

            console.log(totalDecay);

            functionPlot({
              width: width,
              height: height,
              title: "Comment Health vs. Line in Program",
              disableZoom: true,
              xAxis: {domain: [0, MAX_LINE], label: "Code Line Number"},
              yAxis: {domain: [0,100], label: "Comment Health"},
              // xDomain: xScale,
              // yDomain: [0, 100],//computeYScale(width, height, xScale),

              target: '#main-plot',
              data: [{
                fn: totalDecay,
                // derivative: {
                //   fn: '2x',
                //   updateOnMouseMove: true
                // },
                color: "#00ffff"
              }]
            });

        });



      }
    };
  });
