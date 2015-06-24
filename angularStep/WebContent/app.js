
angular
  .module('myApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'main.html',
        controller: 'mainCtrl'
      })
      .when('/step2', {
        templateUrl: 'step2.html',
        controller: 'step2Ctrl'
      }).when('/step3', {
        templateUrl: 'step3.html',
        controller: 'step3Ctrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });

angular.module('myApp')
.service('sharedData', function () {
	
	this.name='';
	this.lastname='';
	this.email='';
	this.phoneNum='';
	this.dateDepart='';
	this.dateReturn='';
	this.location='';
	
});

document.getElementById('step1').className='active';