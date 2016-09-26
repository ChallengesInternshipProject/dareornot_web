'use strict';

/**
 * @ngdoc function
 * @name dareornotApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the dareornotApp
 */
angular.module('dareornotApp')
  .controller('ContactsCtrl', ['NgMap', function(NgMap) {
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  }]);
