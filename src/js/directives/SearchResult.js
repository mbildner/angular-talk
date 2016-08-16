angular.module('SearchBar')
.directive('searchResult', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: { searchResult: '=' },
    template: '' +
     '<div>' +
     '  <movie movie="searchResult"></movie>' +
     '</div>'
  };
});

