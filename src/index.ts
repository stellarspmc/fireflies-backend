import { Hono } from 'hono'
import { xai } from '@ai-sdk/xai';
import { generateText } from 'ai';

const app = new Hono()

app.post('/', async (c) => {
  const text  = await generateText({
    model: xai('grok-3-mini'),
    prompt: await c.req.text(),
  });
  return c.text(text.text, 200);
})
app.get('/', async (c) => c.text('fireflies-backend', 200))

export default app