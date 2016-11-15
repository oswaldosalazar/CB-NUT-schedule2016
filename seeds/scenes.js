
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('scenes').insert({id: 1, scene: 'partyBoys'}),
        knex('scenes').insert({id: 2, scene: 'partyGirls'}),
        knex('scenes').insert({id: 3, scene: 'cousins'}),
        knex('scenes').insert({id: 4, scene: 'hornBoys'}),
        knex('scenes').insert({id: 5, scene: 'soldiers'}),
        knex('scenes').insert({id: 6, scene: 'cavalry'}),
        knex('scenes').insert({id: 7, scene: 'sugarPlumAttendants'}),
        knex('scenes').insert({id: 8, scene: 'angelsRight'}),
        knex('scenes').insert({id: 9, scene: 'angelsLeft'}),
        knex('scenes').insert({id: 10, scene: 'polichinellesClowns'}),
        knex('scenes').insert({id: 11, scene: 'polichinellesDolls'}),
        knex('scenes').insert({id: 12, scene: 'motherGingerLegs'}),
      ]);
    });
};
