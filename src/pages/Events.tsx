import { FC, useState } from "react";
import EventsList from "../components/events/EventList";
import EventsHeader from "../components/events/EventsHeader";

const Events: FC = () => {
  const [isCreateEventModalOpen, toggleEventModal] = useState(false);

  const toggleCreateEventModal = () => {
    toggleEventModal(!isCreateEventModalOpen);
  };

  return (
    <section className="flex flex-col">
      <EventsHeader />
      <EventsList
        isCreateEventModalOpen={isCreateEventModalOpen}
        toggleCreatePostPopUp={toggleCreateEventModal}
      />
    </section>
  );
};

export default Events;
