import { FC, useContext } from "react";
import { IEvent } from "../../interfaces/Interfaces";
import UpcomingEventItem from "./UpcomingEventItem";
import { EventContext } from "../../contexts/EventContext";
import { EventContextType } from "../../types/EventContextType";

const UpcomingEventList: FC = () => {
  const { events } = useContext(EventContext) as EventContextType;

  const createEventList = () => {
    const sortedEvents = events.sort((a: IEvent, b: IEvent) => {
      return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
    });

    const upcomingEvents = sortedEvents.slice(0, 5);

    return upcomingEvents.map((e: IEvent) => {
      return (
        <div key={e.eventId}>
          <UpcomingEventItem
            eventId={e.eventId}
            name={e.name}
            description={e.description}
            allowGuests={e.allowGuests}
            bannerImg={e.bannerImg}
            startTime={e.startTime}
            endTime={e.endTime}
            createdBy={e.createdBy}
          />
        </div>
      );
    });
  };

  return (
    <section className="w-2/6 bg-white mt-2 ml-3 shadow-lg h-full">
      <h2 className="font-semibold text-center p-1">Your upcoming events:</h2>
      <div className="">{createEventList()}</div>
    </section>
  );
};

export default UpcomingEventList;
