import { FC, useEffect, useState } from "react";
import EventDetails from "../components/events/EventsDetails";
import {EventService} from "../services/EventService";
import {IEvent} from "../interfaces/Interfaces";
import Header from "../components/Header";

const Events:FC = () => {
    const [events, setEvents] = useState([] as IEvent[]);

    useEffect(()=>{
        EventService.getAll().then(events =>{
            console.log(events);
            setEvents(events)
        })
    },[]); 
    return(
        <section className="ml-8">
            <Header
            heading="Events"
            headerBtnText="Create"
            />
            <h2 className="font-bold text-2xl">Most Popular Events</h2>
            {
                events && events?.length && events.map(ev=>{
                    return <EventDetails event={{
                        id: ev.eventId || 0,
                        title: ev.name || "",
                        description: ev.description || "",
                        StartDate: ev.startTime || "",
                        EndDate: ev.endTime || "",
                        bannerImg: ev.bannerImg || "",
                        users: ev.users || [],
                    }} onDelete={function (id: number): void {
                        throw new Error("Function not implemented.");
                    } } onUpdate={function (id: number, updatedEvent: any): void {
                        throw new Error("Function not implemented.");
                    } }/>
                })
            }
            <h2 className="font-bold text-2xl mt-3">Recommended for you</h2>
        </section>
    )
}

export default Events;