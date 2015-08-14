'use strict';


 
angular.module('travelEuApp')
  .controller('CountryCtrl', function ($rootScope,$scope,$routeParams,$http,baseUrl) {

  	var countryName = $routeParams.countryName;
    //CountryService.setSelectedCountry(countryName);
    $rootScope.selectedCountry=countryName;
  
  var url=baseUrl+'country/'+countryName;
  $scope.country=null;

  $http.get(url)
    .success(function(data) {
    	
    	$scope.country = data;
    });

  		
  });
