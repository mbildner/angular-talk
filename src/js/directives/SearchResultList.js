angular.module('SearchBar')
.directive('searchResultList', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: { searchResults: '=' },
    template: '' +
      '<div>' +
      '  <search-result search-result="searchResult" ng-repeat="searchResult in searchResults track by $index"></search-result>' +
      '</div>',
  };
});
