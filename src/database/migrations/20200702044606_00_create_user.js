
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
    table.increments('idUser').primary();
    table.string('nome').notNullable();
    table.string('password').notNullable();
    table.string('cpf').notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('user');
};