import axios from "axios";
import { IEvent } from '../interfaces/Interfaces';

export const EventService = (function(){

    const urlToEventController = "https://noroffalumni.azurewebsites.net/api/Events";

    const getAll = async () => {
        const result = await axios.get( urlToEventController );
        return result.data as IEvent[];
    }

    const updateEvent = async (eventToUpdate: IEvent, id: number) => {
        const url = urlToEventController + id;
        const result = await axios.put(url, eventToUpdate);
        return result.data as IEvent[];
    }

    const deleteEvent = async (id: number) => {
        const url = urlToEventController + id;
        const result = await axios.delete(url);
        return result.data as IEvent[];
    }

    const postEvent = async ( newEvent: IEvent) => {

        const result = await axios.post( urlToEventController, newEvent );
        return result.data as IEvent[];
    }

    return {
        getAll,
        updateEvent,
        deleteEvent,
        postEvent
    }

}()) 