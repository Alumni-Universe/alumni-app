import { ICreateEventPayload, IEvent } from "../interfaces/Interfaces";

export type EventContextType = {
  events: IEvent[];
  selectedEventId: number;
  updateEvent: (eventToUpdate: IEvent, id: number) => void;
  deleteEvent: (id: number) => void;
  postEvent: (newEvent: ICreateEventPayload) => void;
  setSelectedEventId: (eventId: number) => void;
};
