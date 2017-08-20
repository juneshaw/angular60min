var app = angular.module('angular60minApp', ['ngRoute'])
        app.config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/view1', {
                    templateUrl: '/partials/view1.html',
                    controller: 'MainController'
                })
                .when('/view2', {
                  templateUrl: '/partials/view2.html',
                  controller: 'MainController'
                })
                .otherwise({redirectTo : '/view1'})
        })
