'use strict';

/**
 * @ngdoc function
 * @name dareornotApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the dareornotApp
 */
angular.module('dareornotApp')
  .controller('RegisterCtrl', function ($uibModal, $log) {
    var $ctrl = this;

    $ctrl.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register',
        size: size,
        resolve: {
          items: function () {
            return $ctrl.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $ctrl.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });
