
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('saved').insert({id: 1, user_id: '1111', saved_list: ["a","b","c"]}),
        knex('saved').insert({id: 2, user_id: '2222', saved_list: ["A","B","C"]}),
        knex('saved').insert({id: 3, user_id: '3333', saved_list: ["aa","bb","cc"]}),
        knex('saved').insert({id: 4, user_id: '10154784895144661', saved_list: ["Joaquin Salazar-Diaz","BB","CC"]})
      ]);
    });
};
