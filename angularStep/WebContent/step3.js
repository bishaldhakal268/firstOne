
angular.module('myApp')
  .controller('step3Ctrl', function ($scope,$routeParams,sharedData) {
	 
	  	$scope.naam=sharedData.name;
		$scope.thar=sharedData.lastname;
		$scope.hulak=sharedData.email;
		$scope.door=sharedData.phoneNum;
	    $scope.dateDepar=sharedData.dateDepart;
		$scope.dateRet=sharedData.dateReturn;
		$scope.place=sharedData.location;
	
	  
	  
	  
	/*  For routeParams method
	  
	  $scope.dateDepart=$routeParams.datedepart;
	  $scope.dateReturn=$routeParams.datereturn;
	  $scope.location=$routeParams.location;
	  $scope.firstname=$routeParams.name;
	  $scope.lastname=$routeParams.lastname;
	  $scope.emailId=$routeParams.email;
	  $scope.phoneNum=$routeParams.phone;*/
  });
