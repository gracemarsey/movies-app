import { FastifyInstance } from 'fastify';
import { getUserByUsername } from '../services';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const setupRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/', async () => {
    return { message: 'Hello from the server!' };
  });

  fastify.get('/search/:movie', async (request, reply) => {
    const { movie } = request.params as { movie: string };
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.VITE_OMDB_API_KEY}&t=${movie}`);

    if (response.data.Response === "False") {
      if (response.data.Error === "Movie not found!") {
        return reply.status(404).send(response.data)
      }
    }

    return reply.status(200).send(response.data);
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
