import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventView from "../components/events/EventView";
import Header from "../components/Header";
import { IEvent } from "../interfaces/Interfaces";
import { EventService } from "../services/EventService";

const EventViewDetail = function () {
  const { eventId } = useParams();
  const [event, setEvent] = useState<IEvent | undefined>(undefined);
  const [isCreateEventModalOpen, toggleEventModal] = useState(false);

  const toggleCreateEventModal = () => {
    toggleEventModal(!isCreateEventModalOpen);
  };

  useEffect(() => {
    getEventDetail();
  }, []);

  const getEventDetail = async function () {
    if (typeof eventId !== "string") return;
    const event = await EventService.getEventById(eventId);
    setEvent(event);
  };

  return (
    <div>
      <Header
        heading="Event"
        headerBtnText="Create"
        isPopUpVisible={isCreateEventModalOpen}
        changePopUpVisibility={toggleCreateEventModal}
      />

      {event && <EventView event={event} />}
    </div>
  );
};

export default EventViewDetail;
