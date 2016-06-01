angular.module('githubUsers')
.controller('MainCtrl', ['$scope', 'githubService', 'githubServiceResponseFilter', function($scope, githubService, githubServiceResponseFilter) {

	$scope.users = ['No data'];

	$scope.users = githubService.async()
	.then(function(response){
		var userData = githubServiceResponseFilter(response);

		console.log('userData = ' + userData[0].login);
		$scope.users = userData;
	});
  
  // $scope.items = [{
  //   name: 'serg',
  //   post: '123',
  //   city: 'dnepr',
  // }];
  
  // $scope.onClickSubmit = function(){
  //   $scope.items[$scope.items.length] = {
  //     name: $scope.name,
  //     post: $scope.post,
  //     city: $scope.city,
  //   }
  // }
  
}]);