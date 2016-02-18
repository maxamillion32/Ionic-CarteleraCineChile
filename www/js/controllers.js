angular.module('starter.controllers', [])

.controller('inicioCtrl', function($scope, $timeout, $ionicLoading, FacebookService, DatabaseService, $state) {
    $scope.isLoginSave = false;
    var ROUTE_FILM = 'tabsController.peliculas';

    $scope.fbLogin = function() {
        FacebookService.fbLogin().then(function(status) {
            if (status) {
                FacebookService.getDataFromFacebook().then(function(datauser) {
                    if (datauser) {
                        $state.go(ROUTE_FILM);
                    }
                });
            }
        });
    };

    function fbData() {
        DatabaseService.selectPerson().then(function(person) {
            if (person) {
                $state.go(ROUTE_FILM);
            } else {
                $scope.isLoginSave = true;
            }
        });
    };

    $scope.goListFilms = function() {
        $state.go(ROUTE_FILM);
    };

    $timeout(function() {
        fbData();
    }, 2000);
})

.controller('peliculasCtrl', function($scope, DatabaseService, Peliculas, $ionicLoading, $localstorage) {
    $scope.cineselectedDefault =  $localstorage.get('cineselected');

    DatabaseService.selectPerson().then(function(person) {
        $scope.profile = person;
    });

    $scope.removecine = function(){
        $localstorage.set('cineselected', '');
        $scope.cineselectedDefault = '';        
    };

    $scope.peliculas = Peliculas.query();
})

.controller('cinesCtrl', function($scope, DatabaseService, Cines, $ionicLoading, $localstorage,$state) {
    DatabaseService.selectPerson().then(function(person) {
        $scope.profile = person;
    });

    $scope.cines = Cines.query();

    $scope.data = {
        cineselected: $localstorage.get('cineselected')
    };

    $scope.savecine = function(nameCine) {
            $localstorage.set('cineselected', nameCine);
            $state.go('tabsController.peliculas', null, {reload: true});
    };

})

;