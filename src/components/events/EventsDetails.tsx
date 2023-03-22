import React from 'react';
import Sidebar from '../shared/Sidebar';

interface EventDetailsProps {
  event: {
    id: number;
    title: string;
    description: string;
    StartDate: string;
    EndDate: string;
    bannerImg: string;
    users: {userId:string, name: string}[]
  };
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedEvent: any) => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event, onDelete, onUpdate }) => {
    const getInitials = function(name: string){
        name = name.toUpperCase();
        const nameSplit = name.split(" ");
        if(nameSplit.
            length<2)return  name[0];
        else return nameSplit[0][0] + nameSplit[1][0];
    }


  return (
 /*   <div>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>{event.StartDate}</p>
      <p>{event.EndDate}</p>
      <button onClick={() => onDelete(event.id)}>Delete</button>
      <button onClick={() => onUpdate(event.id, event)}>Update</button>
    </div>*/
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
                event.users && event.users.map(user=>{
                    return(
                        <span className='ml-1 border-solid rounded-sm bg-sky-500 py-4 px-5'>
                            {getInitials(user.name)}
                        </span>
                    )
                })
            }

        </div>
    </div>
  );
};

export default EventDetails;