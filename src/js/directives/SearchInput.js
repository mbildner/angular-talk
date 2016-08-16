angular.module('SearchBar')
.directive('searchInput', function(Events){
  return {
    restrict: 'E',
    replace: true,
    scope: { searchTerm: '=' },
    template: '' +
      '<input placeholder="find a movie..." ng-model="searchTermGetSet" ng-model-options="{ getterSetter: true }" />',
    link: function(scope){
      scope.searchTermGetSet = function(_searchTerm){
        if (typeof _searchTerm === 'undefined') return scope.searchTerm;

        Events.onSearchTermChanged(_searchTerm);
      };
    }
  };
});
