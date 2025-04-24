// @ts-ignore
import { FreeAI } from '@milcondev/free-ai';
import { Hono } from 'hono'
import dotenv from 'dotenv';
dotenv.config();

const freeAI = new FreeAI(1000);
const app = new Hono()

interface Env {
  ACCESS_KEY: string
}

const bot

app.post('/', bot.handler)
app.get('/', async (c) => c.text('fireflies-backend'))

export default app