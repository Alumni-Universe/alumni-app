import { LockClosedIcon, UserGroupIcon } from "@heroicons/react/outline";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../../contexts/EventContext";
import { EventContextType } from "../../types/EventContextType";

interface EventItemProps {
  eventDetails: {
    id: number;
    title: string;
    description: string;
    StartDate: string;
    EndDate: string;
    bannerImg: string;
    users: { userId: string; name: string }[];
    allowGuests: boolean;
  };
  isCreateEventModalOpen: boolean;
  toggleCreatePostPopUp: Function;
  modalMode: string;
  setModalMode: Function;
}

const EventItem: React.FC<EventItemProps> = ({
  eventDetails,
  isCreateEventModalOpen,
  toggleCreatePostPopUp,
  modalMode,
  setModalMode,
}) => {
  const { deleteEvent, setSelectedEventId } = useContext(
    EventContext
  ) as EventContextType;

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const getInitials = function (name: string) {
    name = name.toUpperCase();
    const nameSplit = name.split(" ");
    if (nameSplit.length < 2) return name[0];
    else return nameSplit[0][0] + nameSplit[1][0];
  };

  const toggleDropdown = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  const onDeleteEvent = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    ev.preventDefault();
    deleteEvent(eventDetails.id);
  };
  const editEvent = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    ev.preventDefault();
    console.log("about to set: ", eventDetails.id);
    setSelectedEventId(eventDetails.id);
    setModalMode("EDIT");

    toggleCreatePostPopUp(true);
  };

  return (
    <Link to={`/event/${eventDetails.id}`}>
      <div className="flex mt-4 justify-between items-center">
        <div className="flex w-44 mr-3">
          <img alt="banner" src={eventDetails.bannerImg} />
        </div>
        <div className="flex mr-3 w-20">
          <p>
            {eventDetails.allowGuests ? (
              <div className="flex items-center space-x-2">
                <LockClosedIcon className="h-6 w-6 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-700">Private</h2>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <UserGroupIcon className="h-6 w-6 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-700">Public</h2>
              </div>
            )}
          </p>
        </div>
        <div>
          <p>{eventDetails.StartDate.toLocaleString()}</p>
          <span>{eventDetails.title}</span>
          <p>{eventDetails.description}</p>
        </div>
        <div>
          {eventDetails.users &&
            eventDetails.users.map((user) => {
              return (
                <span className="ml-1 border-solid rounded-sm bg-sky-500 py-4 px-5" key={user.userId}>
                  {getInitials(user.name)}
                </span>
              );
            })}
        </div>
        <div className="flex-none">
          <button onClick={toggleDropdown}>
            <img
              src="settingsIcon.png"
              alt="settings"
              className="h-6 w-6 text-center"
            />
          </button>
          {dropdownVisible && (
            <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <p onClick={editEvent} className="text-sm">
                    Edit event
                  </p>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <p className="text-sm">Share</p>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <p onClick={onDeleteEvent} className="text-sm text-red-500">
                    Delete
                  </p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
