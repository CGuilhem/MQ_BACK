import { FastifyInstance } from 'fastify'
import { getUsers } from '../controllers/user'

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/users', 
    { schema: {
        response: {
            200: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'number' },
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  address: { type: 'string' },
                  birthDate: { type: 'string' },
                  zipCode: { type: 'string' },
                  city: { type: 'string' },
                },
              },
            },
        },
    }},
    async (request, reply) => {
        const users = await getUsers()
        reply.header("Access-Control-Allow-Origin", "*");
        reply.send(users)
  })
}