// Here you would define your services, e.g., interacting with the database

import { db } from '../db';

export const getUserByUsername = async (username: string) => {
  const user = await db.selectFrom('users').selectAll().where('username', '=', username).executeTakeFirst();
  return user;
};
