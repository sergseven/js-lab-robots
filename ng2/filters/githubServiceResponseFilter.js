angular.module('githubUsers')
.filter('githubServiceResponse', function() {
	return function(input){

		console.log('input = '+input);
		var userArray = [];
		for(var i = 0; i < input.length; i++){
			userArray.push({
				login : input[i].login,
			});

		}

		console.log('userArray = '+userArray);
		return userArray;
	}
});