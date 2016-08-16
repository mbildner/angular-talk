angular.module('SearchBar')
.directive('movie', function(Store){
  return {
    restrict: 'E',
    replace: true,
    scope: { movie: '=' },
    template: '' +
      '<p>{{ movie.title }}</p>'
  };
});
