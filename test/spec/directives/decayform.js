'use strict';

describe('Directive: decayForm', function () {

  // load the directive's module
  beforeEach(module('decaymodelApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<decay-form></decay-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the decayForm directive');
  }));
});
