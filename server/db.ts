import { Kysely, SqliteDialect } from 'kysely';
import Database from 'better-sqlite3';
import { DB } from './types';

export const dialect = new SqliteDialect({ database: new Database('./db.sqlite') });

export const db = new Kysely<DB>({ dialect });
