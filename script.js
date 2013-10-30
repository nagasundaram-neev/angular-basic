function MyFirstController($scope){
		$scope.appliedStyle='btn';
		$scope.items=[];
		$scope.theme='jumbotron';
		for (var i = 0;i<=100; i++) {
			$scope.items.push(i);
		}
		$scope.styles = [
    {name: 'Danger', className:'btn btn-danger'},
    {name: 'Info', className:'btn btn-info'},
    {name: 'Success', className:'btn btn-success'}
    ];

			$scope.up=function(){

			$scope.firstname=$scope.firstname.toUpperCase()
			$scope.lastname=$scope.lastname.toUpperCase()
			$scope.fullname="Hai " + $scope.firstname + " " + $scope.lastname;
	}
	

  $scope.user = {eMail: 'nagas@live.in', lastName: 'Nagas', opt1: true, opt2: 'Not Ok'};
  $scope.progressbar_style='progress-bar';
  $scope.run=function(){
		  if ($scope.clickednum<30)
		  {
		  $scope.progressbar_style='progress-bar progress-bar-danger';
		  }
			else if ($scope.clickednum<50)
		  {
		  $scope.progressbar_style='progress-bar progress-bar-warning';
		  }
			else if($scope.clickednum<80)
		  {
		  $scope.progressbar_style='progress-bar progress-bar-info';
		  } 
		  else
		  {
		  $scope.progressbar_style='progress-bar progress-bar-success';
		  }
	}

	$scope.panel_style='panel panel-warning';
	
	if(myForm.$valid)
	{
	$scope.panel_style='panel panel-success';
	}
	else
	{
	$scope.panel_style='panel panel-danger';
	}
	
	$scope.panel_style='panel panel-info';
}