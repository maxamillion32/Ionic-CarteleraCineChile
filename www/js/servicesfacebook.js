angular.module('starter.Facebook', [])

.service('FacebookService', function($ionicPlatform, $cordovaSQLite, LoggingService, $q, $localstorage, DatabaseService, ngFB) {
    this.fbLogin = function() {
        var promise =
            ngFB.login({
                scope: 'email'
            }).then(
                function(response) {
                    if (response.status === 'connected') {
                        $localstorage.accessToken = response.authResponse.accessToken;
                        return {
                            status: response.status
                        };
                    } else {
                        console.log('facebook login', response.status);
                        return null;
                    }
                });
        return promise;
    };

    this.getDataFromFacebook = function () {
        var promise =
            ngFB.api({
                path: '/me',
                params: {
                    fields: 'id,name,email,gender,location,friends'
                }
            }).then(
                function(user) {
                    return DatabaseService.insert(user.email, user.name, user.friends);
                },
                errorHandler);
        return promise;
    };

    function errorHandler(error) {
        alert(error.message);
    };
    return this;
});
