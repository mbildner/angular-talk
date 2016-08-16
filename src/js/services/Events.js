angular.module('SearchBar')
.service('Events', function(Store, FakeApiService){
  this.onSearchTermChanged = function(searchTerm){
    Store.searchTerm = searchTerm;
    Store.listIsLoading = true;

    if (searchTerm.length) {
      FakeApiService.findMovies(searchTerm)
        .then(function(movies){
          Store.searchResults = movies;
          Store.listIsLoading = false;
        });
    }
    else {
      this.onSearchTermEmptied();
      Store.listIsLoading = false;
    }
  };

  this.onSearchTermEmptied = function(){
    Store.searchResults = null;
  };
});

