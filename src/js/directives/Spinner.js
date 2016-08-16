angular.module('SearchBar')
.directive('spinner', function(){
  return {
    restrict: 'E',
    replace: true,
    template: '' +
      '<div class="loader"></div>'
  };
});
