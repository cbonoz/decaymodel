'use strict';

describe('Directive: decayPlot', function () {

  // load the directive's module
  beforeEach(module('decaymodelApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<decay-plot></decay-plot>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the decayPlot directive');
  }));
});
