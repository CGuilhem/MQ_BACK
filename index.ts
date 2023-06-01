import Fastify from 'fastify'
import cors from '@fastify/cors'
import userRoutes from './routes/user'

const fastify = Fastify({
    // logger: true,
    requestTimeout: 30000, // 30 seconds
});

fastify.register(userRoutes, { prefix: 'api/v1' });

fastify.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})