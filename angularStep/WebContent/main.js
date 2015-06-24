angular.module('myApp')
  .controller('mainCtrl', function ($scope,sharedData) {
   
	  $scope.nextto2=function(){
		  sharedData.name=$scope.fname;
		  sharedData.lastname=$scope.lname;
		  sharedData.email=$scope.email;
		  sharedData.phoneNum=$scope.phoneNum;
		  document.getElementById('step1').className='inactive';
		  document.getElementById('step3').className='inactive';
		  document.getElementById('step2').className='active';
	  }
  });
