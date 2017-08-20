app.controller('MainController', ['$scope', function($scope){
  $scope.test='HTML and Routes Working'
  $scope.customers=[{name:'June',city:'ZFort Collins'}, {name:'Jeff',city:'State College'}]

  $scope.addCustomer = function () {
    console.log('adding customer')
    $scope.customers.push(
      {name: $scope.newCustomer.name,
      city: $scope.newCustomer.city}
    )
  }

}])
