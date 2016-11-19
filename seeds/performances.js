
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('performances').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('performances').insert({id: 1, dateTime: '2016-11-26 13:00:00 MST', cast_id: 1}),
        knex('performances').insert({id: 2, dateTime: '2016-11-26 18:30:00 MST', cast_id: 2}),
        knex('performances').insert({id: 3, dateTime: '2016-11-27 13:00:00 MST', cast_id: 3}),
        knex('performances').insert({id: 4, dateTime: '2016-12-01 18:30:00 MST', cast_id: 3}),
        knex('performances').insert({id: 5, dateTime: '2016-12-02 11:00:00 MST', cast_id: 1}),
        knex('performances').insert({id: 6, dateTime: '2016-12-03 13:00:00 MST', cast_id: 2}),
        knex('performances').insert({id: 7, dateTime: '2016-12-04 13:00:00 MST', cast_id: 3}),
        knex('performances').insert({id: 8, dateTime: '2016-12-04 18:30:00 MST', cast_id: 1}),
        knex('performances').insert({id: 9, dateTime: '2016-12-08 19:30:00 MST', cast_id: 2}),
        knex('performances').insert({id: 10, dateTime: '2016-12-09 19:30:00 MST', cast_id: 3}),
        knex('performances').insert({id: 11, dateTime: '2016-12-10 13:00:00 MST', cast_id: 1}),
        knex('performances').insert({id: 12, dateTime: '2016-12-10 18:30:00 MST', cast_id: 2}),
        knex('performances').insert({id: 13, dateTime: '2016-12-11 13:00:00 MST', cast_id: 3}),
        knex('performances').insert({id: 14, dateTime: '2016-12-11 18:30:00 MST', cast_id: 1}),
        knex('performances').insert({id: 15, dateTime: '2016-12-15 19:30:00 MST', cast_id: 2}),
        knex('performances').insert({id: 16, dateTime: '2016-12-16 19:30:00 MST', cast_id: 1}),
        knex('performances').insert({id: 17, dateTime: '2016-12-17 13:00:00 MST', cast_id: 2}),
        knex('performances').insert({id: 18, dateTime: '2016-12-17 18:30:00 MST', cast_id: 3}),
        knex('performances').insert({id: 19, dateTime: '2016-12-18 13:00:00 MST', cast_id: 1}),
        knex('performances').insert({id: 20, dateTime: '2016-12-18 18:30:00 MST', cast_id: 3}),
        knex('performances').insert({id: 21, dateTime: '2016-12-20 18:30:00 MST', cast_id: 1}),
        knex('performances').insert({id: 22, dateTime: '2016-12-21 13:00:00 MST', cast_id: 2}),
        knex('performances').insert({id: 23, dateTime: '2016-12-21 18:30:00 MST', cast_id: 3}),
        knex('performances').insert({id: 24, dateTime: '2016-12-22 13:00:00 MST', cast_id: 1}),
        knex('performances').insert({id: 25, dateTime: '2016-12-22 18:30:00 MST', cast_id: 2}),
        knex('performances').insert({id: 26, dateTime: '2016-12-23 13:00:00 MST', cast_id: 3}),
        knex('performances').insert({id: 27, dateTime: '2016-12-23 18:30:00 MST', cast_id: 1}),
        knex('performances').insert({id: 28, dateTime: '2016-12-24 13:00:00 MST', cast_id: 2})
      ]);
    });
};
