import { Hono } from 'hono';
import { cors } from "hono/cors";
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

app.use(
    "*",
    cors({
      origin: "https://fireflies.chiculture.org.hk/",
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["POST", "GET", "OPTIONS"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true,
    }),
);

export default app