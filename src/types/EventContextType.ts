import { IEvent } from "../interfaces/Interfaces";

export type EventContextType = {
  events: IEvent[];
  updateEvent: (eventToUpdate: IEvent, id: number) => void;
  deleteEvent: (id: number) => void;
  postEvent: (newEvent: IEvent) => void;
};
