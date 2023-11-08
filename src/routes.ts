import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import { CreateCustomerController} from './controllers/CreateCustomerController'
import { ListCustomerController } from './controllers/ListCustomerController';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';


export default async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
        return { hello: 'world' }
    })

    fastify.post('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);

})

fastify.get('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomerController().handle(request, reply);

})

fastify.delete('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply);

})

}