import { Message } from "./Message";

interface DoneMessage extends Message {
  event: 'done'
  data: {}
}