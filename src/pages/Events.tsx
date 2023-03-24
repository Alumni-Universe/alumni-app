import { FC, useState } from "react";
import Header from "../components/Header";
import EventsList from "../components/events/EventList";
import EventsHeader from "../components/events/EventsHeader";

const Events: FC = () => {
  const [isCreateEventModalOpen, toggleEventModal] = useState(false);

  const toggleCreateEventModal = () => {
    toggleEventModal(!isCreateEventModalOpen);
  };

  return (
    <section className="flex flex-col p-2">
      <EventsHeader/>
      <EventsList
        isCreateEventModalOpen={isCreateEventModalOpen}
        toggleCreatePostPopUp={toggleCreateEventModal}
      />
    </section>
  );
};

export default Events;