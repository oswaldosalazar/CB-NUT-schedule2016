app.factory('PerformancesStudentsService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/performancesStudents');
    }
  }
})
