'use strict';

/**
 * @ngdoc function
 * @name dareornotApp.controller:SingleDareCtrl
 * @description
 * # SingleDareCtrl
 * Controller of the dareornotApp
 */
angular.module('dareornotApp')
  .controller('SingleDareCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  // ==========Function timeline and categories ==============

$('myCarousel').carousel({
  interval: 4000
})

$('.carousel .item').each(function () {
  console.log(jQuery(this));
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < 2; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});
 