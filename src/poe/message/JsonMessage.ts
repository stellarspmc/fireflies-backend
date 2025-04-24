import { Message } from "./Message";

interface JsonMessage extends Message {
    event: 'json'
    data: Record<string, any>
}