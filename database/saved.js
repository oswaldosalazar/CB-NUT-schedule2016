var knex = require('./config');

function getSaved(id) {
  return knex('saved').where({user_id: id})
}

function postSaved(body) {
  return knex('saved').insert({user_id: body.userId, saved_list: body.saveList })
}

function updateSaved(body) {
  return knex('saved').where({id: body.id}).update({saved_list: body.saveList })
}

function deleteSaved(id) {
  return knex('saved').where({id: id}).del()
}

module.exports = {
  getSaved:getSaved,
  postSaved:postSaved,
  updateSaved:updateSaved
};
