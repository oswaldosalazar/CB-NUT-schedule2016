var knex = require('./config');

function getSaved() {
  return knex('saved')
}

module.exports = {
  getSaved:getSaved
};
