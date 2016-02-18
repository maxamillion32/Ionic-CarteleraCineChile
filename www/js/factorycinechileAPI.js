angular.module('starter.CineChileAPI', ['ngResource'])

.factory('Cines', function($resource) {
  return $resource('https://cinechile.herokuapp.com/api/cines');
})

.factory('Peliculas', function($resource) {
  return $resource('https://cinechile.herokuapp.com/api/peliculas');
});


