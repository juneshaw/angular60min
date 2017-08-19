var app = angular.module('angular60minApp', ['ngRoute'])
        app.config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '../partials/index.html',
                    controller: 'MainController'
                })
                .otherwise({redirectTo : '/'})
        })
