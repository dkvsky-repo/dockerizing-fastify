export default async function routes (fastify, options) {

  fastify.get('/', async (request, reply) => {
    return { hello: 'world', today: new Date(), hello2: 'sync' }
  });

  fastify.get('/test', async (request, reply) => {
    return { test: 'testing' }
  });
}