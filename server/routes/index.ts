import { FastifyInstance } from 'fastify';
import { getUserByUsername } from '../services';

export const setupRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/', async () => {
    return { message: 'Hello from the server!' };
  });

  fastify.get('/users/:username', async (request, reply) => {
    const { username } = request.params as { username: string };
    const user = await getUserByUsername(username);

    if (!user) {
      reply.status(404).send({ error: 'User not found' });
      return;
    }
    return reply.status(200).send(user);
  });
};

export default setupRoutes;
