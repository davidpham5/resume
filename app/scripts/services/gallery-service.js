'use strict';

angular.module('pham6App')
	.factory('GalleryService', function($http, $q) {
		return {
			getAllItems: function(keyWord) {
				var deferred = $q.defer();
				var apiURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=8f313e56000b65c199feec72f724bb57&format=json';
				
				$http.get(apiURL).success(function(data){
					deferred.resolve(data);
				}).error(function (error) {
                	//Sending a friendly error message in case of failure
					deferred.reject("An error occured while fetching items");
	            });
	            //Returning the promise object
	            return deferred.promise;
			}
		}
	});	