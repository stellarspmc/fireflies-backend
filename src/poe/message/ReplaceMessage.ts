import { Message } from "./Message";

interface ReplaceMessage extends Message {
    event: 'replace_response'
    data: {
        text: string
    }
}