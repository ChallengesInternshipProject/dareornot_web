'use strict';

describe('Controller: SingleDareCtrl', function () {

  // load the controller's module
  beforeEach(module('dareornotApp'));

  var SingleDareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SingleDareCtrl = $controller('SingleDareCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SingleDareCtrl.awesomeThings.length).toBe(3);
  });
});
