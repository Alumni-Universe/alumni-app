import { IEvent } from "../interfaces/Interfaces";
import { EventContextType } from "../types/EventContextType";
import { EventService } from "../services/EventService";
import { FC, useState, useEffect, createContext} from "react";

export const EventContext = createContext<EventContextType | null>(null);

export const EventProvider: FC<IEvent> = ({children}) => {

    const [alumniGroups, setEvents] = useState<IEvent[]>([
        
    ]);

    useEffect( () => { 
        getEvents();

        

     }, [] )

    const getEvents = async () => {
        const _alumniGroups = await EventService.getAll();
        setEvents( _alumniGroups );
    }

    const updateEvent = async (alumniGroupToUpdate: IEvent, id: number) => {
        await EventService.updateEvent(alumniGroupToUpdate, id);
        const _alumniGroups = await EventService.getAll();
        setEvents( _alumniGroups );
    }

    const deleteEvent = async (id: number) => {
        await EventService.deleteEvent(id);
        const _alumniGroups = await EventService.getAll();
        setEvents( _alumniGroups );
    }

    /*const postArtist = (newArtist: IArtist) => {
        setArtists([newArtist, ...artists]); // I useState øsnker man ikke mutasjoner 
    }*/

    const postEvent = async (newEvent: IEvent) => {
        await EventService.postEvent(newEvent);
        const _alumniGroups = await EventService.getAll();
        setEvents( _alumniGroups );
        
    }

    return (
        <>
            <EventContext.Provider value={{alumniGroups, updateEvent, postEvent, deleteEvent}}>
                {children}
            </EventContext.Provider>
        </>
    )
}

