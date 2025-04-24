import { Message } from "./Message";

interface TextMessage extends Message {
    event: 'text'
    data: {
        text: string
    }
}