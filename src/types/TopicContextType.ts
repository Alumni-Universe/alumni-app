import { ITopic } from '../interfaces/Interfaces'

export type TopicContextType = {
    topics: ITopic[]
    updateTopic: (topicToUpdate: ITopic, id: number) => void
    deleteTopic: (id: number) => void
    postTopic: (newTopic: ITopic) => void
}