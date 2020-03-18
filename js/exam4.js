var app4 = angular.module('app4', []);

app4.controller('eventCtrl', function($scope){
  $scope.disableButton = true;

  $scope.dayTimeButton = true;

  $scope.capitals= [
    {"city": "Mont", "state":"Ab"},
    {"city": "Jun", "state":"Al"},
    {"city": "Ph ", "state":"Ari"},
    {"city": "LR", "state":"Ak"},

  ];
});
