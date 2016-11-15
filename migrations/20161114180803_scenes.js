
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scenes', function(table) {
    table.increments();
    table.string('scene');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scenes');
};
