app.controller('mainCtrl',function(StudentsService) {
  var vm = this;
  vm.selectedCast = '';
  vm.title = "";
  vm.casts = ['N', 'U', 'T'];
  vm.scenes = ['partyBoys', 'partyGirls', 'cousins', 'hornBoys', 'soldiers', 'cavalry', 'sugarPlumAttendants', 'angelsRight', 'angelsLeft', 'polichinellesClowns', 'polichinellesDolls', 'motherGingerLegs'];
  StudentsService.all()
  .then((data)=> {
    vm.students = data.data
  })
})
app.controller('performanceCtrl',function(StudentsService, PerformancesService) {
  var vm = this;
  vm.selectedCast = '';
  vm.title = "";
  vm.casts = ['N', 'U', 'T'];
  vm.scenes = ['partyBoys', 'partyGirls', 'cousins', 'hornBoys', 'soldiers', 'cavalry', 'sugarPlumAttendants', 'angelsRight', 'angelsLeft', 'polichinellesClowns', 'polichinellesDolls', 'motherGingerLegs'];
  PerformancesService.all()
  .then((data)=> {
    vm.performances = data.data
  })
})
