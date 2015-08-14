'use strict';

/**
 * @ngdoc overview
 * @name travelEuApp
 * @description
 * # travelEuApp
 *
 * Main module of the application.
 */
angular
  .module('travelEuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('baseUrl', 'http://localhost:8080/countries/')
  .constant('cityBaseUrl', 'http://localhost:8080/cities/')
  .constant('attractionBaseUrl', 'http://localhost:8080/attractions/')
  .config(function ($routeProvider,$locationProvider) {

   $locationProvider.hashPrefix('!');
    //$locationProvider.html5Mode(false);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/countries/:countryName', {
        templateUrl: 'views/country.html',
        controller: 'CountryCtrl'
      })
       .when('/countries/:countryName/cities/:cityName', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl'
      })
        .when('/countries/:countryName/cities/:cityName/attractions/:attractionName', {
        templateUrl: 'views/attraction.html',
        controller: 'AttractionCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('countryListCtrl', function($rootScope,$scope,$http,baseUrl){

      //$scope.countries = countryListService.listCountries; 
      $rootScope.selectedCountry='';
      $scope.listCountries = function () {
      $http.get(baseUrl).success(function (data) {
        $scope.countries= data;
        });
      
      };
     

      $scope.getActiveClass=function(country){
        return $rootScope.selectedCountry === country.permalink ? 'active' : '';
      };

      $scope.listCountries();

    
  });
 

 

  

