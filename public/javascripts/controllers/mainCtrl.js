app.controller('mainCtrl',function(StudentsService) {
  var vm = this;
  vm.text = "Hello World"
  vm.number = 1 + 3;
  StudentsService.all()
  .then((data)=> {
    vm.students = data.data
  })
})
