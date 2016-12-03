
exports.up = function(knex, Promise) {
  return knex.schema.createTable('saved', function(table) {
    table.increments();
    table.string('user_id');
    table.specificType('saved_list', "text[]");
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('saved');
};
