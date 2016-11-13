
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table) {
    table.increments();
    table.string('name');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');
};
