import { Message } from "./Message";

interface ErrorMessage extends Message {
  event: 'error'
  data: {
    allow_retry: boolean
    text: string
    raw_response: string
    error_type: string
  }
}