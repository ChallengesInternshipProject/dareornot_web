'use strict';

describe('Controller: ProfileStatisticsCtrl', function () {

  // load the controller's module
  beforeEach(module('dareornotApp'));

  var ProfileStatisticsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileStatisticsCtrl = $controller('ProfileStatisticsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfileStatisticsCtrl.awesomeThings.length).toBe(3);
  });
});
