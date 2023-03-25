import React, { FC, useEffect, useState } from "react";
import { IEvent } from "../../interfaces/Interfaces";
import { EventService } from "../../services/EventService";
import CreateEvents from "./CreateEventsModal";
import EventDetails from "./EventsDetails";

const EventsList: FC<{
  isCreateEventModalOpen: boolean;
  toggleCreatePostPopUp: Function;
}> = ({ isCreateEventModalOpen, toggleCreatePostPopUp }) => {
  const [events, setEvents] = useState([] as IEvent[]);

  useEffect(() => {
    getAllEvents();
  }, []);

    const onSubmit = async function(CreateTitle: string, CreateLocation: string,CreateDescription: string, CreateEndDate: string, CreateStartDate: string, CreateImage:string){
     const eventPayload: IEvent = {
        name: CreateTitle,
        description: CreateDescription,
        allowGuests: true,
        bannerImg: CreateImage,
        startTime: new Date(CreateStartDate),
        endTime: new Date(CreateEndDate),
        createdBy: "1",
        users: [],
        eventId:0
      };
      await EventService.postEvent(eventPayload);
      getAllEvents();
    }
    const onClose=function() {
        toggleCreatePostPopUp();
    }
 
  const getAllEvents = function () {
    EventService.getAll().then((events) => {
      console.log(events);
      setEvents(events);
    });
  };

  return (
    <div>
      <h2 className="font-bold text-2xl mt-4">Most Popular Events</h2>
      {events &&
        events?.length &&
        events.map((ev) => {
          return (
            <EventDetails
              event={{
                id: ev.eventId || 0,
                title: ev.name || "",
                description: ev.description || "",
                StartDate: new Date(ev.startTime).toDateString() || "",
                EndDate: new Date(ev.endTime).toDateString() || "",
                bannerImg: ev.bannerImg || "",
                users: ev.users || [],
              }}
              onDelete={function (id: number): void {
                throw new Error("Function not implemented.");
              }}
              onUpdate={function (id: number, updatedEvent: any): void {
                throw new Error("Function not implemented.");
              }}
            />
          );
        })}
      <CreateEvents
        isOpen={isCreateEventModalOpen}
        onSubmit={onSubmit}
        onClose={onClose}
      />
    </div>
  );
};

export default EventsList;
