var knex = require('./config');

function getSaved(user_id) {
  return knex('saved').where({user_id: user_id})
}

function postSaved(body) {
  return knex('saved').insert({user_id: body.user_id, saved_list: body.saved_list })
}

function updateSaved(body) {
  return knex('saved').where({id: body.id}).update({saved_list: body.saved_list })
}

function deleteSaved(id) {
  return knex('saved').where({id: id}).del()
}

module.exports = {
  getSaved:getSaved,
  postSaved:postSaved,
  updateSaved:updateSaved,
  deleteSaved:deleteSaved
};
