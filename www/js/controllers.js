angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, ionicScrollableTimePicker) {
  $scope.open12HourTimePicker = function() {
    ionicScrollableTimePicker.openTimePicker({
      setButtonText: 'Ok',
      closeButtonText: 'Cancel',
      format: 12,
      initialDate: new Date(2016, 11, 30, 11, 40),
      callback: function(date) {
        console.log('Selected Date:' + date.toString());
      }
    });
  };

  $scope.open24HourTimePicker = function() {
    ionicScrollableTimePicker.openTimePicker({
      callback: function(date) {
        console.log('Selected Date:' + date.toString());
      }
    });
  };
})

.controller('RepoCtrl', function() {})

.controller('ContactCtrl', function() {});
