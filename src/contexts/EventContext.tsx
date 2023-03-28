import { ICreateEventPayload, IEvent } from "../interfaces/Interfaces";
import { EventContextType } from "../types/EventContextType";
import { EventService } from "../services/EventService";
import { FC, useState, useEffect, createContext } from "react";

export const EventContext = createContext<EventContextType | null>(null);

export const EventProvider: FC<IEvent> = ({ children }) => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<number>(0);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const _events = await EventService.getAll();
    setEvents(_events);
  };

  const updateEvent = async (alumniGroupToUpdate: IEvent, id: number) => {
    await EventService.updateEvent(alumniGroupToUpdate, id);
    const _events = await EventService.getAll();
    setEvents(_events);
  };

  const deleteEvent = async (id: number) => {
    await EventService.deleteEvent(id);
    const _events = await EventService.getAll();
    setEvents(_events);
  };

  /*const postArtist = (newArtist: IArtist) => {
        setArtists([newArtist, ...artists]); // I useState øsnker man ikke mutasjoner 
    }*/

  const postEvent = async (newEvent: ICreateEventPayload) => {
    await EventService.postEvent(newEvent);
    const _events = await EventService.getAll();
    setEvents(_events);
  };

  return (
    <>
      <EventContext.Provider
        value={{ events, selectedEventId, updateEvent, postEvent, deleteEvent, setSelectedEventId }}
      >
        Selected Event Id: {selectedEventId}
        {children}
      </EventContext.Provider>
    </>
  );
};
