'use strict';


 
angular.module('travelEuApp')
  .controller('CityCtrl', function ($rootScope,$scope,$routeParams,$http,cityBaseUrl) {

  	var cityName = $routeParams.cityName;
    var countryName=$routeParams.countryName;
  
  var url=cityBaseUrl+'city/'+cityName;
  $scope.selectedCity = null;
  $rootScope.selectedCountry=countryName;

  $http.get(url)
    .success(function(data) {
    	$scope.selectedCity = data;
    });

  		
  });
