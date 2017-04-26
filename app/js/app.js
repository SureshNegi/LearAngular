//var app = angular.module('F1FeederApp', ['ui.router', 'F1FeederApp.services', 'F1FeederApp.controllers']);
define(['angular', 'ngRoute', 'uiRouter','js/services'], function (angular) {
    var app = angular.module('F1FeederApp', ['ui.router','ngRoute','F1FeederApp.services']);
//config(['$routeProvider', function($routeProvider) {
//  $routeProvider.
//	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
//	when("/drivers/:id", { templateUrl: "partials/driver.html", controller: "driverController" }).
//    when("/login", { templateUrl: "partials/login.html", controller: "loginController" }).
//	otherwise({redirectTo: '/login'});
//}]);
app.config(function ($stateProvider, $urlRouterProvider) {
    // Push Interceptors 
    
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html'
        })        
        .state('drivers', {
            url: '/drivers',
            templateUrl: 'partials/drivers.html'
        })
       .state('driver', {
           url: '/driver/:id',
           templateUrl: 'partials/driver.html',
               params: {
        driverId: null
               

               },
    })
    //$stateProvider.state(home);
    // if none of the above states are matched, use this as the fallback
   // $urlRouterProvider.otherwise("/login");

})

app.init = function () {
    console.log('app.init called');
    angular.bootstrap(document, ['F1FeederApp']);
};

return app;
    //.run(['$state', function ($state) {
//    $state.transitionTo('login');
//}])
});
