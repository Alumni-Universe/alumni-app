import { FC, useState } from "react";
import EventsList from "../components/events/EventList";
import EventsHeader from "../components/events/EventsHeader";
import { EventProvider } from "../contexts/EventContext";

const Events: FC<{}> = () => {

  const [isCreateEventModalOpen, toggleEventModal] = useState(false);
  const [modalMode, setModalMode] = useState('CREATE');

  const toggleCreateEventModal = () => {
    toggleEventModal(!isCreateEventModalOpen);
  };

  return (
    <section className="flex flex-col p-2">

      <EventProvider
        eventId={0}
        name={""}
        description={null}
        allowGuests={false}
        bannerImg={null}
        startTime={new Date()}
        endTime={new Date()}
        createdBy={0}
      >
        <EventsHeader
          isCreateEventPopUpVisible={isCreateEventModalOpen}
          changeCreateEventPopUpVisiblility={toggleEventModal}
          modalMode={modalMode}
          setModalMode={setModalMode}
        />
        <EventsList
          isCreateEventModalOpen={isCreateEventModalOpen}
          toggleCreatePostPopUp={toggleCreateEventModal}
          modalMode={modalMode}
          setModalMode={setModalMode}
        />
      </EventProvider>

    </section>
  );
};

export default Events;
