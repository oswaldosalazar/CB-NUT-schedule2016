app.factory('PerformancesService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/performances');
    }
  }
})
