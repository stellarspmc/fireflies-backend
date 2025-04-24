import { Message } from './Message'

interface MetaMessage extends Message {
  event: 'meta'
  data: {
    content_type?: 'text/markdown' | 'text/plain' // default: text/markdown
    suggested_replies?: boolean // default: false
  }
}