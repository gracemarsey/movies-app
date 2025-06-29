import { defineConfig } from 'kysely-ctl';
import { dialect } from './server/db';

export default defineConfig({ dialect });
