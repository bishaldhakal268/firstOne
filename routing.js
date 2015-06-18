
var app=angular.module('myMain',['ngRoute']);

app.controller('homeCtrl',function($scope){
	$scope.hide=true;
	$scope.x="hi";
	$scope.dekhau=false;
	$scope.submit=function(){
		$scope.hide=false;
	}
	
	 var d = new Date();
	    var time = d.getHours();

	    if (time < 12) 
	      {
	      $scope.greet='Good morning!';
	      }
	    if (time > 12) 
	      {
	      $scope.greet='Good afternoon!';
	      }
	
});

app.controller('bioCtrl',function($scope){
	
	
});


app.controller('contactCtrl',function($scope){
	$scope.x="Bishal";
	
});
	
app.config(function($routeProvider){
	$routeProvider.when('/homebase', {
		templateUrl: 'homepage.html',
		controller: 'homeCtrl'
	}).when('/bio', {
		templateUrl: 'bio.html',
		controller: 'bioCtrl'
	}).when('/contact', {
		template: '<span>Call us at (818)-400-9090</span><hr><p>Email us at bisubaba18@gmail.com</p><hr><a href="#bio">Take Me back</a>',
		controller: 'contactCtrl'
	}).otherwise({ redirectTo: '/home' });
});