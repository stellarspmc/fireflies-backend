type FeedbackType = 'like' | 'dislike'
export interface MessageFeedback {
    type: FeedbackType
    reason?: string
}