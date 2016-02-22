angular.module('starter.services', [])

.service('LoggingService', function($rootScope) {
    this.log = function(message) {
        $rootScope.$broadcast('log', message);
    };
    return this;
})

.service('DatabaseService', function($ionicPlatform, $cordovaSQLite, LoggingService, $q) {
    var db;

    window.document.addEventListener('deviceready', function() {
        db = $cordovaSQLite.openDB({
            name: "mydb",
            bgType: 1
        });
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, email text, name text)");
    }, false);

    this.insert = function(email, name) {
        var query = "INSERT INTO people (email, name) VALUES (?,?)";
        var args = [email, name]
        var result = $cordovaSQLite.execute(db, query, args);
        return {email:email, name:name};
    };

    this.selectPerson = function() {
        var query = "SELECT email, name FROM people";
        var promise = $cordovaSQLite.execute(db, query, [])
            .then(function(result) {
                var person = result.rows.item(0);
                return person;
            });
        return promise;
    };
    return this;
});