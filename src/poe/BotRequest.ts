type BotRequest = {
    version: string
    type: 'query' | 'settings' | 'report_feedback' | 'report_error'
}