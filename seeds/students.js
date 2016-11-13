
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('students').insert({
          id: 1,
          name: 'Joaquin Salazar'
        })
      ]);
    });
};
