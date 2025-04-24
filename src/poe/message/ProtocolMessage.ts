import { MessageFeedback } from "./impl/MessageFeedback";
import { Attachment } from "./impl/Attachment";

type ContentType = 'text/markdown' | 'text/plain'
type Identifier = string

export interface ProtocolMessage {
    role: 'system' | 'user' | 'bot'
    content: string
    content_type: ContentType
    timestamp: number
    message_id: Identifier
    feedback: MessageFeedback[]
    attachments: Attachment[]
}