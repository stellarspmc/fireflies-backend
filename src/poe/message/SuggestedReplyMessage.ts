import { Message } from "./Message";

interface SuggestedReplyMessage extends Message {
  event: 'suggested_reply'
  data: {
    text: string
  }
}