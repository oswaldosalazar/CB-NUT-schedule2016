var knex = require('./config');

function getAllStudents() {
  return knex('students')
  .innerJoin('students_scenes', 'students_scenes.student_id', 'students.id')
  .innerJoin('casts', 'casts.id', 'students_scenes.cast_id')
  .innerJoin('scenes', 'scenes.id', 'students_scenes.scene_id');
}

module.exports = {
  getAllStudents: getAllStudents
};
