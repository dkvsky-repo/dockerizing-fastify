import Fastify from 'fastify';
import posts from './routes/posts.js';

const fastify = Fastify({ logger: true })

fastify.register(posts);

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: '0.0.0.0'})
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()