var selfportal = angular.module('selfportal',['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/login");
	$stateProvider
	.state('login', {
		url:"/login",
		templateUrl:"./app/login/login.html",
		controller:"loginController",
		controllerAs: "login"
	})
	.state('viewProfile', {
		url:"/viewprofile",
		templateUrl:"./app/viewProfile/viewprofile.html",
		controller:"viewProfileController",
		controllerAs: "vp"
	});
}]);
//module.exports = selfportal;