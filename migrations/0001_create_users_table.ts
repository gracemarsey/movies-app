/* eslint-disable @typescript-eslint/no-explicit-any */
import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('users')
    .addColumn('username', 'text', (col) => col.notNull().unique())
    .execute();

  await db.insertInto('users').values({ username: 'tom' }).execute();

  await db.insertInto('users').values({ username: 'grace' }).execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('users').execute();
}
