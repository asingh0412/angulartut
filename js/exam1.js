//
var app1 = angular.module('app1', []);

//$scope is going to link our html element
// to variable in our scope.
// this controler will recieve a controller name and
// factory function 'function' is a factory function
//with $scope is where dependency injection is happening.
// where angular smart enought to know it needs to inject a $scope
console.log("in exam 1 : controller");
app1.controller('ctrl1', function($scope){
  $scope.first = 1;
  $scope.second = 1;
  // $fName = 'Amaninder';
  // $lName = 'Singhh';
  $scope.capitals= [
              {city:'Herndon', state:'Virginia'},
              {city:'Seattle', state:'Washington'},
              {city:'Turlock', state:'California'}
             ];

  $scope.updateValue = function(){
    $scope.calculation = $scope.first+ '+' +$scope.second +
      " = " + (+$scope.first + +$scope.second )
  };
});
