angular.module('SearchBar')
.directive('searchResultList', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: { searchResults: '=' },
    template: '' +
      '<ul class="list-group">' +
      '  <search-result search-result="searchResult" ng-repeat="searchResult in searchResults track by $index"></search-result>' +
      '</ul>',
  };
});
