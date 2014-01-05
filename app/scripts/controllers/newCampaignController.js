'use strict';

angular.module('dcFrontendApp')
  .controller('NewcampaigncontrollerCtrl', function ($scope, $http) {

    $scope.campaign = new Campaign();
    // $http.get('/api/awesomeThings').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });
  });
