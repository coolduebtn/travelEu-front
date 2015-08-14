'use strict';


 
angular.module('travelEuApp')
  .controller('AttractionCtrl', function ($rootScope,$scope,$routeParams,$http,attractionBaseUrl) {

  	$scope.attractionName = $routeParams.attractionName;
    var countryName=$routeParams.countryName;

    $rootScope.selectedCountry=countryName;
  var url=attractionBaseUrl+'attraction/'+$scope.attractionName;
  $scope.selectedAttraction = null;

  $http.get(url)
    .success(function(data) {
    	$scope.selectedAttraction = data;
    });
  		
  });
