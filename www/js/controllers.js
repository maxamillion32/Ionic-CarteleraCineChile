angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout, $ionicLoading, FacebookService, DatabaseService, $state) {
    $scope.isLoginSave = false;
    var ROUTE_FILM = 'film';

    $scope.fbLogin = function() {
        FacebookService.fbLogin().then(function(status){
            if (status) {
                FacebookService.getDataFromFacebook().then(function(datauser){
                    if (datauser) {
                        $state.go(ROUTE_FILM, {userProfile:datauser});
                    }
                })
            }
        });
    };


    function fbData() {
        DatabaseService.selectPerson().then(function(person) {
            if (person) {
                $state.go(ROUTE_FILM, {userProfile:person});
            } else {
                $scope.isLoginSave = true;
            }
        });
    };

    $scope.goListFilms = function (){
        $state.go(ROUTE_FILM);
    };

    $timeout(function() {
        fbData();
    }, 2000);
})

.controller('FilmsCtrl', function($scope, $stateParams, Cines, Peliculas) {
    $scope.profile = $stateParams.userProfile;
    
     $scope.cines = Cines.query();
     $scope.peliculas = Peliculas.query();

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});