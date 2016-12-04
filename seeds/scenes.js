
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('scenes').insert({id: 1, scene: 'Party Boys'}),
        knex('scenes').insert({id: 2, scene: 'Party Girls'}),
        knex('scenes').insert({id: 3, scene: 'Cousins'}),
        knex('scenes').insert({id: 4, scene: 'Horn Boys'}),
        knex('scenes').insert({id: 5, scene: 'Soldiers'}),
        knex('scenes').insert({id: 6, scene: 'Cavalry'}),
        knex('scenes').insert({id: 7, scene: 'Sugar Plum Attendants'}),
        knex('scenes').insert({id: 8, scene: 'Angels Right'}),
        knex('scenes').insert({id: 9, scene: 'Angels Left'}),
        knex('scenes').insert({id: 10, scene: 'Polichinelles Clowns'}),
        knex('scenes').insert({id: 11, scene: 'Polichinelles Dolls'}),
        knex('scenes').insert({id: 12, scene: 'Mother Ginger Legs'}),
      ]);
    });
};
