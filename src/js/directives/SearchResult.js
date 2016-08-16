angular.module('SearchBar')
.directive('searchResult', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: { searchResult: '=' },
    template: '' +
    '<li class="list-group-item">' +
      '<movie movie="searchResult"></movie>' +
    '</li>',
  };
});

