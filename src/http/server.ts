import fastify from 'fastify'
import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { vateOnPoll } from './routes/vote-on-poll';
import cookie from "@fastify/cookie"

const app = fastify()

app.register(cookie, {
    secret: "polls-app-uahsu",
    hook: "onRequest",
    parseOptions: {}
})

app.register(getPoll)
app.register(createPoll)
app.register(vateOnPoll)

app.listen({port: 3333}).then(() => {
    console.log('HTTP server is running...')
})

