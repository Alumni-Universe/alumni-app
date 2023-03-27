import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';

interface EventDetailsProps {
  event: {
    id: number;
    title: string;
    description: string;
    StartDate: string;
    EndDate: string;
    bannerImg: string;
    users: { userId: string; name: string }[];
  };
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedEvent: any) => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event, onDelete, onUpdate }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
  const getInitials = function(name: string){
      name = name.toUpperCase();
      const nameSplit = name.split(" ");
      if(nameSplit.length < 2) return name[0];
      else return nameSplit[0][0] + nameSplit[1][0];
  }

  
  const toggleDropdown = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    setDropdownVisible(!dropdownVisible);
};

const deleteEvent = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    ev.preventDefault();
    onDelete(event.id);
}
const editEvent = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    ev.preventDefault();
    onUpdate(event.id, event);
}

  return (
    <Link to={`/event/${event.id}`}>
      <div className='flex mt-4 justify-between'>
          <div className='flex w-44 mr-3'>
              <img src={event.bannerImg}/>
          </div>
          <div>
              <p>
                  {event.StartDate.toLocaleString()}
              </p>
              <span>
                  {event.title}
              </span>
              <p>
                  {event.description}
              </p>
          </div>
          <div>
              {
                  event.users && event.users.map(user => {
                      return (
                          <span className='ml-1 border-solid rounded-sm bg-sky-500 py-4 px-5'>
                              {getInitials(user.name)}
                          </span>
                      )
                  })
              }
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
                                        <p onClick={editEvent} className="text-sm">Edit event</p>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <p className="text-sm">Share</p>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <p onClick={deleteEvent} className="text-sm text-red-500">Delete</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
      </div>
    </Link>
  );
};

export default EventDetails;
