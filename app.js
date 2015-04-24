var signIn = angular.module('signIn', ['ui.router']);

  signIn.config(function($stateProvider) {

    $stateProvider.state('home', {
      url: "",
      templateUrl: "partials/home.html"
    });

});
