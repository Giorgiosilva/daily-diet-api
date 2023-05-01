"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable('users', (table) => {
        table.uuid('id').primary();
        table.text('name').notNullable();
        table.text('email').notNullable();
        table.text('address').notNullable();
        table.decimal('weight', 5, 2).notNullable();
        table.integer('height').notNullable();
        table.uuid('session_id').index();
        table.text('created_at').defaultTo(knex.fn.now()).notNullable();
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTable('users');
}
exports.down = down;
