exports.up = function(knex){
  return knex.schema.createTable('feedback', table => {
    table.increments('idFeedBack').primary();
    table.string('nota',2).notNullable();
    table.decimal('valor').notNullable();
    table.string('comentario', 255).notNullable();
    table.integer('fk_idUser')
    .notNullable()
    .references('idUser')
    .inTable('user');
    table.integer('fk_idBar')
    .notNullable()
    .references('idBar')
    .inTable('bar');
  });
}
exports.down = function(knex) {
  knex.schema.dropTable('feedback');
}