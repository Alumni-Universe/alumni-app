import axiosInstance from '../axiosInstance';
import { IEvent } from '../interfaces/Interfaces';

export const EventService = (function(){

    const urlToEventController = "https://noroffalumni.azurewebsites.net/api/Events/";

    const getAll = async () => {
        const result = await axiosInstance.get( urlToEventController );
        return result.data as IEvent[];
    }

    const updateEvent = async (eventToUpdate: IEvent, id: number) => {
        const url = urlToEventController + id;
        const result = await axiosInstance.put(url, eventToUpdate);
        return result.data as IEvent[];
    }

    const deleteEvent = async (id: number) => {
        const url = urlToEventController + id;
        const result = await axiosInstance.delete(url);
        return result.data as IEvent[];
    }

    const postEvent = async ( newEvent: IEvent) => {

        const result = await axiosInstance.post( urlToEventController, newEvent );
        return result.data as IEvent[];
    }

    const getEventById = async (eventId: string) => {
        const url = urlToEventController + eventId;
        const result = await axiosInstance.get(url);
        return result.data as IEvent;
  }

    return {
        getAll,
        updateEvent,
        deleteEvent,
        postEvent,
        getEventById
    }

}()) 