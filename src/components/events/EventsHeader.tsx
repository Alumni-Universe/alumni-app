import { CalendarIcon } from "@heroicons/react/outline";
import { FC, SetStateAction, useContext, useEffect, useState } from "react";
import { EventContext } from "../../contexts/EventContext";
import { IEvent } from "../../interfaces/Interfaces";
import { EventService } from "../../services/EventService";
import { EventContextType } from "../../types/EventContextType";
import CreateEvents from "./CreateEventsModal";

interface HeaderProps {
  isCreateEventPopUpVisible: boolean;
  changeCreateEventPopUpVisiblility: (visible: boolean) => void;
  modalMode: string;
  setModalMode: Function
}

const EventsHeader: FC<HeaderProps> = ({
  isCreateEventPopUpVisible,
  changeCreateEventPopUpVisiblility,
  modalMode,
  setModalMode
}) => {
  const { events, setSelectedEventId } = useContext(EventContext) as EventContextType;
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);

  const [searchInput, setSearchInput] = useState("");
  const openCreateEventModal = () => {
    changeCreateEventPopUpVisiblility &&
      changeCreateEventPopUpVisiblility(!isCreateEventPopUpVisible);
      setSelectedEventId(0);
      setModalMode('CREATE');
  };

  const handleCreateEventSubmit = (postText: string) => {
    changeCreateEventPopUpVisiblility && changeCreateEventPopUpVisiblility(false);
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchInput(event.target.value);

    const searchResults = !searchInput
      ? events
      : events.filter(
        (event) =>
          event.name
            .toLowerCase()
            .includes(searchInput.toLocaleLowerCase()) ||
          event.description
            ?.toLowerCase()
            .includes(searchInput.toLocaleLowerCase())
        );

    setFilteredEvents(searchResults);
  };

  const renderSearchResults = () => {
    if (searchInput && filteredEvents.length > 0) {
      return (
        <div className="absolute bg-white shadow-md mt-2 py-2 w-full z-10">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="px-4 py-2 text-gray-600 hover:bg-gray-200 cursor-pointer"
            >
              <h4>{event.name}</h4>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-6 w-6 text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-700">Events</h2>
        </div>
        <button
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          onClick={openCreateEventModal}
        >
          Create
        </button>
      </header>
      <hr className="mb-2" />
      <div className="relative w-full bg-white shadow-md">
        <input
          value={searchInput}
          onChange={handleChange}
          type="text"
          placeholder="Search Here"
          className="form-control w-full p-2"
          aria-describedby="basic-addon2"
        />
        {renderSearchResults()}
      </div>
      {isCreateEventPopUpVisible && (
        <CreateEvents
          isOpen={isCreateEventPopUpVisible}
          modalMode={modalMode}
          changeCreateEventPopUpVisiblility={changeCreateEventPopUpVisiblility}
        />
      )}
    </>
  );
};

export default EventsHeader;
