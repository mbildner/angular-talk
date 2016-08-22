angular.module('SearchBar')
.directive('searchBar', function(Store){
  return {
    restrict: 'E',
    replace: true,
    template: '' +
      '<div clas="input-group">' +
      '  <search-input search-term="searchTerm()"></search-input>' +
      '  <spinner ng-if="listIsLoading()"></spinner>' +
      '  <search-result-list ' +
      '     ng-if="!listIsLoading()"' +
      '     search-results="searchResults()"></search-result-list>' +
      '</div>',
    link: function(scope) {
      scope.searchResults = function(){ return Store.searchResults; };
      scope.searchTerm = function(){ return Store.searchTerm; };
      scope.listIsLoading = function() { return Store.listIsLoading; };
    }
  };
});
