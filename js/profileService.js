angular.module('devMtIn')
.service('profileService', function($http) {

	var baseUrl = "http://connections.devmounta.in/";

	this.serviceTest = function() {
		console.log('profileService is connected!');
	}

	this.saveProfile = function(profile) {
		return $http({
			method: 'POST', //Request Method
			url: baseUrl + 'api/profiles', //URL we're making request to
			data:profile
		})
		.then(function(profileResponse){
			localStorage.setItem('profileId', JSON.stringify({ profileId: profileResponse.data._id}));
			console.log(profileResponse);
		})
		.catch(function(err) {
			console.error(err);
		});
	}

	this.checkForProfile = function(profileId) {
		return $http({
			method: 'GET',
			url: baseUrl + 'api/profiles/' + profileId
		});
	}

	this.deleteProfile = function() {
		var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;

		return $http({
			method: 'DELETE',
			url: baseUrl + 'api/profiles/' + profileId
		});
	}


});