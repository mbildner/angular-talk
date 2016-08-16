angular.module('SearchBar')
.service('Store', function(){
  this.searchTerm = null;
  this.searchReults = null;
  this.listIsLoading = false;
});
