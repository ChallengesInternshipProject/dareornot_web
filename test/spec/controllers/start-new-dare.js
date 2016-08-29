'use strict';

describe('Controller: StartNewDareCtrl', function () {

  // load the controller's module
  beforeEach(module('dareornotApp'));

  var StartNewDareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartNewDareCtrl = $controller('StartNewDareCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StartNewDareCtrl.awesomeThings.length).toBe(3);
  });
});
