
exports.up = function(knex){
  return knex.schema.createTable('produto', table => {
    table.increments('idProduto').primary();
    table.string('nomeProduto').notNullable();
    table.decimal('valor').notNullable();
    table.decimal('imagem').notNullable();
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
  knex.schema.dropTable('produto');
}