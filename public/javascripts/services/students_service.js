app.factory('StudentsService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/students');
    }
  }
})
