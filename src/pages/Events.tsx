import { FC, useState } from "react";
import Header from "../components/Header";
import EventsList from "../components/events/EventList";

const Events: FC = () => {
  const [isCreateEventModalOpen, toggleEventModal] = useState(false);

  const toggleCreateEventModal = () => {
    toggleEventModal(!isCreateEventModalOpen);
  };

  return (
    <section className="flex flex-col">
      <Header
        heading="Events"
        headerBtnText="Create"
        isPopUpVisible={isCreateEventModalOpen}
        changePopUpVisibility={toggleCreateEventModal}
      />
      <EventsList
        isCreateEventModalOpen={isCreateEventModalOpen}
        toggleCreatePostPopUp={toggleCreateEventModal}
      />
    </section>
  );
};

export default Events;