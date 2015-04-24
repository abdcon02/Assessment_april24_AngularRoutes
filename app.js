var signIn = angular.module('signIn', ['ui.router']);

  signIn.config(function($stateProvider) {

    $stateProvider.state('home', {
      url: "",
      templateUrl: "partials/home.html"
    });

    $stateProvider.state('attendance', {
        url: "/attendance",
        templateUrl: "partials/attendance.html",
        controller: "StudentsCtrl"
    });

    $stateProvider.state('signInPage', {
        url: "/signIn",
        templateUrl: "partials/signInPage.html",
        controller: "StudentsCtrl"
    });

});
