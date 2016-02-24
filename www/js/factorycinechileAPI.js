angular.module('starter.CineChileAPI', ['ngResource'])

.factory('Cines', function($resource) {
  return $resource('https://stormtestdev.firebaseio.com/api/cines');
})

.factory('Peliculas', function($resource) {
  return $resource('https://stormtestdev.firebaseio.com/api/peliculas');
});


