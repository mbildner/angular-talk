angular.module('SearchBar')
.service('Events', function(Store, FakeApiService){
  this.onSearchTermChanged = function(searchTerm){
    Store.searchTerm = searchTerm;

    if (searchTerm.length) {
      FakeApiService.findMovies(searchTerm)
        .then(function(movies){
          Store.searchResults = movies;
        });
    }
    else {
      this.onSearchTermEmptied();
    }

  };

  this.onSearchTermEmptied = function(){
    Store.searchResults = null;
  };
});

