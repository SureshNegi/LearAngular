define(['js/app'], function (F1FeederApp) {
   
  ///* Drivers controller */
  //F1FeederApp.controller('driversController', function ($scope, ergastAPIservice, $state) {
  //  $scope.nameFilter = null;
  //  $scope.driversList = [];
  //  $scope.searchFilter = function (driver) {
  //      var re = new RegExp($scope.nameFilter, 'i');
  //      return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
  //  };
    
  //  $scope.loadDriver = function (id) {
  //      $state.go('driver', {
  //          "driverId": id
  //      });
  //  }
  //  ergastAPIservice.getDrivers().success(function (response) {
  //      //Digging into the response to get the relevant data
  //      $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  //  });
  //}).

  ///* Driver controller */
  //controller('driverController', function ($scope, $routeParams, ergastAPIservice, $rootScope, $state) {
  //    $scope.id = $state.params.driverId;//$rootScope.$stateParams.driverId
  //  $scope.races = [];
  //  $scope.driver = null;
  // // alert($scope.id + " ==" + $rootScope.$stateParams.driverId)
  //  ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
  //      $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
  //  });

  //  ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
  //      $scope.races = response.MRData.RaceTable.Races; 
  //  }); 
  //}).

    F1FeederApp.controller('loginController', function ($state, $scope, $routeParams, $location) {
        $scope.id = $routeParams.id;
        $scope.races = [];
        $scope.driver = null;
       
        $scope.login=function(){
            if ($scope.username === "Suresh" && $scope.password === "Demo@123") {
                $location.path('/drivers/' + 1);
            }
            $state.go('drivers');
        }
        
  });
});
