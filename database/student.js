var knex = require('./config');

function getAllStudents() {
  return knex('students');
}

module.exports = {
  getAllStudents: getAllStudents
};
