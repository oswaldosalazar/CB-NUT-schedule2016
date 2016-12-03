var knex = require('./config');

function getSaved(id) {
  return knex('saved').where({userId: id})
}

function postSaved(body) {
  return knex('saved').insert({userId: body.userId, savedList: body.savedList })
}

function updateSaved(body) {
  return knex('saved').where({id: body.id}).update({savedList: body.savedList })
}

module.exports = {
  getSaved:getSaved,
  postSaved:postSaved,
  updateSaved:updateSaved
};
