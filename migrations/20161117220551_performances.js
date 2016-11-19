
exports.up = function(knex, Promise) {
  return knex.schema.createTable('performances', function(table) {
    table.increments();
    table.dateTime('dateTime');
    table.integer('cast_id').references('id').inTable('casts').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('performances');
};
