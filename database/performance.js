var knex = require('./config');

function getPerformances() {
  return knex('performances')
  .select('performances.id AS pID', 'performances.dateTime', 'casts.cast')
  .innerJoin('casts', 'casts.id', 'performances.cast_id');
}

module.exports = {
  getPerformances:getPerformances
};
