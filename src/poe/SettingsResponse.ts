import {Context} from "hono";

interface SettingsResponse {
    server_bot_dependencies?: Record<string, number>
    allow_attachments?: boolean
    introduction_message?: string
    expand_text_attachments?: boolean
    enable_image_comprehension?: boolean
    enforce_author_role_alternation?: boolean
    enable_multi_bot_chat_prompting?: boolean
}