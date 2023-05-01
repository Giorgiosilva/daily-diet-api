"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable('meals', (table) => {
        table.uuid('id').primary();
        table.uuid('user_id').index();
        table.text('name').notNullable();
        table.text('description').notNullable();
        table.boolean('isOnTheDiet').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTable('meals');
}
exports.down = down;
