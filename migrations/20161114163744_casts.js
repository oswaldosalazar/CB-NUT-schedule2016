
exports.up = function(knex, Promise) {
  return knex.schema.createTable('casts', function(table) {
    table.increments();
    table.string('cast');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('casts');
};
