var knex = require('./config');

function getPerformancesStudents() {
  return knex('students')
  .select('performances.id AS pID', 'performances.dateTime', 'casts.cast', 'students.name', 'scenes.scene')
  .innerJoin('students_scenes', 'students_scenes.student_id', 'students.id')
  .innerJoin('casts', 'casts.id', 'students_scenes.cast_id')
  .innerJoin('scenes', 'scenes.id', 'students_scenes.scene_id')
  .innerJoin('performances', 'performances.cast_id', 'casts.id');
}

module.exports = {
  getPerformancesStudents:getPerformancesStudents
};
