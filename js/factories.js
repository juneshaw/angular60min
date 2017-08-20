app.factory('simpleFactory', function() {
  var customers = [
    {name: 'June', city: 'FoCo'},
    {name: 'Jeff', city: 'State College'}
  ];

  var factory = {};

  factory.getCustomers = function() {
    return customers;
  }

  factory.postCustomer = function(customer) {

  }
  return factory;
})
