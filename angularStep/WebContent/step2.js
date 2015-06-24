
angular.module('myApp')
  .controller('step2Ctrl', function ($scope,sharedData) {
  
	
	  
	  $scope.nextto3=function(){
		  
		  sharedData.dateDepart=$scope.dateDepart;
		  sharedData.dateReturn=$scope.dateReturn;
		  sharedData.location=$scope.location;
		  document.getElementById('step1').className='inactive';
		  document.getElementById('step2').className='inactive';
		  document.getElementById('step3').className='active';
		 ;
	  }
	  /*$scope.name=$routeParams.name;
  $scope.lname=$routeParams.lastname;
  $scope.emailadd=$routeParams.email;
  $scope.phonenumber=$routeParams.phone;*/
  
  
  });
