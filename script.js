window.app = window.app || {};


(function(){
	window.myCtrl = function($scope, $rootScope){
		$scope.names = ["one", "two"];
		$rootScope.lastname = "number";
	};
	;}())

var app = angular.module("myApp",[]);
	app.controller("myCtrl", window.myCtrl);
