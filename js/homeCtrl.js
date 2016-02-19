angular.module('devMtIn').controller("homeCtrl", function($scope, profileService) {
	$scope.myProfile =
		profileService.checkForProfile();

		/*name: 'Nishu',
		friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}],
		likes: "",
		colors: ""*/

	$scope.sortOptions = [{
		display: 'Ascending',
		value: false
	},
	{
		display: 'Descending',
		value: true

	}];

	$scope.editing = false;

	$scope.saveProfile = function(profile) {
		profileService.saveProfile(profile);
		$scope.editing = false;
	}

	$scope.deleteProfile = function() {
		localStorage.removeItem('profile');
		$scope.myProfile = profileService.checkForProfile();
	}

	$scope.serviceTest = profileService.serviceTest();



});