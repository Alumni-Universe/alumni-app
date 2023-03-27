import React, { FC, useEffect, useState } from "react";
import { IEvent } from "../../interfaces/Interfaces";
import { EventService } from "../../services/EventService";
import CreateEvents from "./CreateEventsModal";
import EventDetails from "./EventsDetails";

const EventsList: FC<{
  isCreateEventModalOpen: boolean;
  toggleCreatePostPopUp: Function;
}> = ({ isCreateEventModalOpen, toggleCreatePostPopUp }) => {
    const [eventModalMode, setEventModalMode] = useState("CREATE");
  const [events, setEvents] = useState([] as IEvent[]);
  const [selectedEvent, setSelectedEvent] = useState();

  useEffect(() => {
    getAllEvents();
  }, []);

    const onSubmit = async function(CreateTitle: string, CreateLocation: string,CreateDescription: string, CreateEndDate: string, CreateStartDate: string, CreateImage:string, CreateUrl: string, eventId: number=0){
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
      await eventModalMode === 'CREATE' ? EventService.postEvent(eventPayload) : EventService.updateEvent(eventPayload,eventId);
      getAllEvents();
    }
    const onClose=function() {
        toggleCreatePostPopUp();
        setEventModalMode("CREATE");
        setSelectedEvent(undefined);
    }
 
  const getAllEvents = function () {
    EventService.getAll().then((events) => {
      console.log(events);
      setEvents(events);
    });
  };

  const deleteEvent = async function(eventId: number) {
    try {
        await EventService.deleteEvent(eventId);
        getAllEvents();
    }
    catch(e){
        alert("Some error occured, please try later!")
    }

  }

  const editEvent = function(eventId: number, event: any){
 
    const selectedEvent: any= events.find((e: any) => e.eventId === eventId);
    console.log(selectedEvent);
    setSelectedEvent(selectedEvent);
    setEventModalMode("EDIT");
    toggleCreatePostPopUp(true);
  }

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
              onDelete={deleteEvent}
              onUpdate={editEvent}
            />
          );
        })}
      <CreateEvents
        isOpen={isCreateEventModalOpen}
        modalMode={eventModalMode}
        onSubmit={onSubmit}
        onClose={onClose}
        modeChangeHandler={setEventModalMode}
        eventDetails={selectedEvent}
      />
    </div>
  );
};

export default EventsList;
