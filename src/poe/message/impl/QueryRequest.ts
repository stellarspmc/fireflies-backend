import { ProtocolMessage } from "../ProtocolMessage";

type Identifier = string

export interface QueryRequest {
    query: ProtocolMessage[]
    user_id: Identifier
    conversation_id: Identifier
    message_id: Identifier
    access_key: string
    temperature?: number
    skip_system_prompt?: boolean
    logit_bias?: Record<string, number>
    stop_sequences?: string[]
    language_code?: string
}