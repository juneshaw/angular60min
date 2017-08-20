app.controller('MainController', ['$scope', 'simpleFactory',
 function($scope, simpleFactory){
  $scope.test='HTML and Routes Working'
  $scope.customers=[];

  init();

  function init() {
    console.log('in the init of controller');
    $scope.customers = simpleFactory.getCustomers();
  }

  $scope.addCustomer = function () {
    console.log('adding customer')
    $scope.customers.push(
      {name: $scope.newCustomer.name,
      city: $scope.newCustomer.city}
    )
  }

}])
