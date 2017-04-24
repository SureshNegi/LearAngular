angular.module('F1FeederApp.controllers', []).
   
  /* Drivers controller */
  controller('driversController', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.searchFilter = function (driver) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

    ergastAPIservice.getDrivers().success(function (response) {
        //Digging into the response to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  }).

  /* Driver controller */
  controller('driverController', function($scope, $routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 
  }).

  controller('loginController', function ($scope, $routeParams, ergastAPIservice, $location) {
      alert('fyu');
        $scope.id = $routeParams.id;
        $scope.races = [];
        $scope.driver = null;
        alert('hi');
        $scope.login=function(){
            if ($scope.username === "Suresh" && $scope.password === "Demo@123") {
                $location.path('/drivers/' + 1);
            }
            $location.path('/drivers/' + 1);
        }

        ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
            $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
        });

        ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
            $scope.races = response.MRData.RaceTable.Races;
        });
    });
