import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EventView from "../components/events/EventView";
//import { IEvent } from "../interfaces/Interfaces";
//import { EventService } from "../services/EventService";

const EventViewDetail = function () {
  const { eventId } = useParams();
  /*
  const [event, setEvent] = useState<IEvent | undefined>(undefined);
  const [isCreateEventModalOpen, toggleEventModal] = useState(false);
  */

  /*
  const toggleCreateEventModal = () => {
    toggleEventModal(!isCreateEventModalOpen);
  };
  */

  useEffect(() => {
    const getEventDetail = async function () {
      if (typeof eventId !== "string") return;
      //const event = await EventService.getEventById(eventId);
      //setEvent(event);
    };
    getEventDetail();
  }, [eventId]);

  return (
    <div>
      <EventView />
    </div>
  );
};

export default EventViewDetail;
