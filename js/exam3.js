// var app3 = angular.module('app3', []);
//   console.log("in the controller");
// app3.controller('gListCtrl',function($scope){
//
//   console.log("in the controller");
// //    $scope.groceries= [t, a, b , c];
//     $scope.groceries = [
//       {item:"T", purchases:false},
//       {item:"P", purchase:false},
//       {item:"G", purchase:false},
//       {item:"Ga", purchase:false}
//     ];
//     console.log("at the end of controller");
//
// });
//
var app3 = angular.module('app3', []);

console.log("in exam 3 : controller");
app3.controller('gCtrl', function($scope){
  $scope.first = 1;
  $scope.second = 1;
  // $fName = 'Amaninder';
  // $lName = 'Singhh';
  $scope.groceries= [
              {item:'Herndon', purchases:false},
              {item:'Seattle', purchases:false},
              {item:'Turlock', purchases:false}
             ];

console.log("before include");
  $scope.getList = function(){
    console.log("After 1 include");
    return $scope.showList ? "groceries.html": "groceries2.html"
  };
  console.log("After include");


});
app3.controller('ctrl1',function($scope){

  $scope.randomNum1 = Math.floor(Math.random() * 10 +1);
  $scope.randomNum2 = Math.floor(Math.random() * 10 +1);
});
