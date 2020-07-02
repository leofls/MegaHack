
exports.up = function(knex){
  return knex.schema.createTable('telefone', table => {
    table.increments('idTelefone').primary();
    table.string('ddd', 3).notNullable();
    table.string('numeroCelular').notNullable();
    table.integer('fk_idUser')
    .notNullable()
    .references('idUser')
    .inTable('user');
    
  })
}
exports.down = function(knex) {
  knex.schema.dropTable('telefone');
}