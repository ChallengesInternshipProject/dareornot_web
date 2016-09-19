'use strict'

/**
 * @ngdoc function
 * @name dareornotApp.controller:AdministrationCtrl
 * @description
 * # AdministrationCtrl
 * Controller of the dareornotApp
 */
angular.module('dareornotApp')
  .controller('AdministrationCtrl', ['$log', '$http', '$uibModal', function($log, $http, $uibModal) {

    var $ctrl = this
    $ctrl.dares = []
    this.oneAtATime = true
      // this.dares = [];

    $http.get('http://dareornot.herokuapp.com/dares')
      .success(function(result) {
        $ctrl.dares = result
          // $log.info(result);
          // $log.info($ctrl.dares);
      })

    $ctrl.approve = function(dareID) {
      $log.info(dareID)
    }
    
    $ctrl.flag = function(dareID) {
      $log.info(dareID)

    }

    $ctrl.remove = function(dareID) {
      $log.info(dareID)
    }

  }])
