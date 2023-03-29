import React, { FC, useContext, useEffect, useState } from "react";
import { EventContext } from "../../contexts/EventContext";
import { IEvent } from "../../interfaces/Interfaces";
import { EventService } from "../../services/EventService";
import { EventContextType } from "../../types/EventContextType";
import CreateEvents from "./CreateEventsModal";
import EventItem from "./EventsItem";

const EventsList: FC<{
  isCreateEventModalOpen: boolean;
  toggleCreatePostPopUp: Function;
  modalMode: string;
  setModalMode: Function
}> = ({ isCreateEventModalOpen, toggleCreatePostPopUp, modalMode, setModalMode }) => {

  const { events } = useContext(EventContext) as EventContextType;

  return (
    <div>
      <h2 className="font-bold text-2xl mt-4">Most Popular Events</h2>
      {events &&
        events?.length &&
        events.map((ev) => {
          return (
            <EventItem
              eventDetails={{
                id: ev.eventId || 0,
                title: ev.name || "",
                description: ev.description || "",
                StartDate: new Date(ev.startTime).toDateString() || "",
                EndDate: new Date(ev.endTime).toDateString() || "",
                bannerImg: ev.bannerImg || "",
                users: ev.users || [],
                allowGuests: ev.allowGuests
              }}
              isCreateEventModalOpen={isCreateEventModalOpen}
              toggleCreatePostPopUp={toggleCreatePostPopUp}
              modalMode={modalMode}
              setModalMode={setModalMode}
            />
          );
        })}

    </div>
  );
};

export default EventsList;
