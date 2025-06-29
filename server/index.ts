import Fastify from 'fastify';
import cors from '@fastify/cors';
import { setupRoutes } from './routes';

const app = Fastify({ logger: true });
const port = 5172;

app.register(cors, {
  origin: '*',
});

setupRoutes(app);

app.listen({ port: port }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening on port ${port}`);
  app.log.info(`server listening on ${address}`);
});
