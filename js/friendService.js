angular.module('devMtIn')
.service('friendService', function($http) {

	this.friendTest = function() {
		console.log('friendService is connected!');
	}

	var baseUrl = "http://connections.devmounta.in/";

	this.findFriends = function(userId, query) {

		return $http({
			method: 'GET',
			url: baseUrl + '/api/friends/' + userId + '?name=' + query
		});

	}

	this.addFriend = function(userId, friendId) {

		return $http({
			method: 'PUT',
			url: baseUrl + '/api/friends/' + userId,
			data: {friendId: friendId}
		})
	}

		
	});