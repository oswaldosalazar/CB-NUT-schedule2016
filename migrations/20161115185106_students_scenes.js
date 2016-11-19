
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students_scenes', function(table) {
    table.increments();
    table.integer('student_id').references('id').inTable('students').onDelete('CASCADE');
    table.integer('scene_id').references('id').inTable('scenes').onDelete('CASCADE');
    table.integer('cast_id').references('id').inTable('casts').onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.unique(['student_id', 'scene_id', 'cast_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students_scenes');
};
