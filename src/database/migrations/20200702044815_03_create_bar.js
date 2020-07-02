
exports.up = function(knex){
  return knex.schema.createTable('bar', table => {
    table.increments('idBar').primary();
    table.string('nomeBar').notNullable();
    table.string('password').notNullable();
    table.string('cnpj').notNullable();
    table.string('imagem').notNullable();
    table.integer('fk_idEndereco')
    .notNullable()
    .references('idEndereco')
    .inTable('endereco');
  })
}
exports.down = function(knex) {
  knex.schema.dropTable('bar');
}