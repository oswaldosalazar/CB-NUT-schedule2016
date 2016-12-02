
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('saved').insert({id: 1, userId: '1111', savedList: ["a","b","c"]}),
        knex('saved').insert({id: 2, userId: '2222', savedList: ["A","B","C"]}),
        knex('saved').insert({id: 3, userId: '3333', savedList: ["aa","bb","cc"]}),
        knex('saved').insert({id: 4, userId: '10154784895144661', savedList: ["Joaquin Salazar-Diaz","BB","CC"]})
      ]);
    });
};
