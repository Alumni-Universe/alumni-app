import { IEvent } from '../interfaces/Interfaces'

export type EventContextType = {
    alumniGroups: IEvent[]
    updateEvent: (alumniGroupToUpdate: IEvent, id: number) => void
    deleteEvent: (id: number) => void
    postEvent: (newEvent: IEvent) => void
}