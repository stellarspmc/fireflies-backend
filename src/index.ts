import { Context, Hono } from 'hono'
import { Message } from "./poe/message/Message";
import { streamSSE } from 'hono/streaming'
const app = new Hono()

function handleSettings(c: Context) {
  return c.json({
    server_bot_dependencies: {
      'GPT-4o': 1,
    },
    introduction_message: 'Please input the question.',
  })
}

function handleQuery(c: Context) {
  return streamSSE(c, async (stream) => {
    const writeSSE = (
        message: Message,
    ) => {
      stream.writeSSE({
        event: message.event,
        data: JSON.stringify(message.data),
      })
    }
    writeSSE({
      event: 'meta',
      data: { content_type: 'text/markdown', suggested_replies: true },
    })
    writeSSE({ event: 'text', data: { text: 'Hello, World!' } })
    writeSSE({ event: 'done', data: {} })
  })
}

app.post('/', async (c) => {
  const request = await c.req.json()
  const { version, type } = request

  switch (type) {
    case 'query':
      return handleQuery(c)
    case 'settings':
      return handleSettings(c)
    default:
      throw new Error('Invalid request type')
  }
})

export default app