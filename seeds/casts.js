
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('casts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('casts').insert({id: 1, cast: 'N'}),
        knex('casts').insert({id: 2, cast: 'U'}),
        knex('casts').insert({id: 3, cast: 'T'})
      ]);
    });
};
