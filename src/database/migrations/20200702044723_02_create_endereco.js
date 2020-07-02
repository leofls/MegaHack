exports.up = function(knex){
  return knex.schema.createTable('endereco', table => {
    table.increments('idEndereco').primary();
    table.string('uf', 2).notNullable();
    table.string('cidade').notNullable();
    table.string('rua').notNullable();
    table.string('numero').notNullable();
    table.string('complemento');
    table.integer('fk_idUser')
    .notNullable()
    .references('idUser')
    .inTable('user');
  });
}
exports.down = function(knex) {
  knex.schema.dropTable('endereco');
}