'use strict';

describe('Controller: inicioCtrl', function() {

    // load the controller's module
    beforeEach(module('starter.controllers'));

    var scope;
    var inicioCtrl;
    var timeout, ionicLoadingMock, FacebookService, DatabaseService, state;


    beforeEach(inject(function($rootScope, $controller, _$timeout_) {
        scope = $rootScope.$new();
        ionicLoadingMock = jasmine.createSpyObj('ionicLoading', ['show']);
        timeout = _$timeout_;
        inicioCtrl = $controller('inicioCtrl', {
            $scope: scope,
            $ionicLoading: ionicLoadingMock,
            FacebookService: FacebookService,
            DatabaseService: DatabaseService,
            $state: state
        });
    }));

    it('Usuario No guardado', function() {
        expect(scope.isLoginSave).toEqual(false);
    });


});