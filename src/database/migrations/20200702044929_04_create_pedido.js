
exports.up = function(knex){
  return knex.schema.createTable('pedido', table => {
    table.increments('idPedido').primary();
    table.string('status', 1).notNullable();
    table.decimal('total').notNullable();
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
  knex.schema.dropTable('pedido');
}