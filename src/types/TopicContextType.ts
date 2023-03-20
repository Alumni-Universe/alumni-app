import { ITopic } from '../interfaces/Interfaces'

export type TopicContextType = {
    alumniGroups: ITopic[]
    updateTopic: (alumniGroupToUpdate: ITopic, id: number) => void
    deleteTopic: (id: number) => void
    postTopic: (newTopic: ITopic) => void
}