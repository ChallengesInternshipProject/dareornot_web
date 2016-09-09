'use strict';

/**
 * @ngdoc function
 * @name dareornotApp.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the dareornotApp
 */
angular.module('dareornotApp')
  .controller('TimelineCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  $('.carousel').carousel({
  interval: 4000,
  pause: "false"
});
