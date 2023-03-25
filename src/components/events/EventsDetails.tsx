import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import DropdownMenu from './Dropdown';

interface EventDetailsProps {
  event: {
    id: number;
    title: string;
    description: string;
    StartDate: string;
    EndDate: string;
    bannerImg: string;
    users: {userId:number, name: string}[]
  };
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedEvent: any) => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event, onDelete, onUpdate }) => {
  const getInitials = function(name: string){
      name = name.toUpperCase();
      const nameSplit = name.split(" ");
      if(nameSplit.length < 2) return name[0];
      else return nameSplit[0][0] + nameSplit[1][0];
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
          <div>
              <DropdownMenu>
                  <button onClick={() => onDelete(event.id)}>Delete</button>
                  <button onClick={() => onUpdate(event.id, event)}>Update</button>
              </DropdownMenu>
          </div>
      </div>
    </Link>
  );
};

export default EventDetails;
