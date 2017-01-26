angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, ionicScrollableTimePicker) {
  $scope.open12HourTimePicker = function() {
    ionicScrollableTimePicker.openTimePicker({
      setButtonText: 'Ok',
      closeButtonText: 'Cancel',
      format: 12,
      initialDate: new Date(2016, 11, 30, 11, 40)
    });
  };

  $scope.open24HourTimePicker = function() {
    ionicScrollableTimePicker.openTimePicker();
  };
})

.controller('RepoCtrl', function() {})

.controller('ContactCtrl', function() {});
