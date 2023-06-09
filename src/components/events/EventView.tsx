// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { FC, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { EventProvider } from "../../contexts/EventContext";
import { IEvent } from "../../interfaces/Interfaces";
import { EventService } from "../../services/EventService";
import Tab from "../shared/Tab";
import CommentBox from "./CommentBox";
import Comment from "./DeleteComment";
import EventAboutBox from "./EventAboutBox";
import EventsHeader from "./EventsHeader";

const EventView: FC = function () {
  const [comments, setComments] = useState<string[]>([]);

  const { eventId } = useParams();
  const [event, setEvent] = useState<IEvent | undefined>(undefined);
  const [isCreateEventModalOpen, toggleEventModal] = useState(false);

  const [modalMode, setModalMode] = useState("CREATE");

  /*
  const toggleCreateEventModal = () => {
    toggleEventModal(!isCreateEventModalOpen);
  };
  */

  const getEventDetail = useCallback(
    async function () {
      if (typeof eventId !== "string") return;
      const event = await EventService.getEventById(eventId);
      setEvent(event);
    },
    [eventId]
  );

  useEffect(() => {
    getEventDetail();
  }, [getEventDetail]);

  useEffect(() => {
    const storedComments = localStorage.getItem("eventComments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleCommentSubmit = (comment: string) => {
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem("eventComments", JSON.stringify(updatedComments));
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem("eventComments", JSON.stringify(updatedComments));
  };

  const EventTab = [
    {
      title: "Details",
      content: <EventAboutBox event={event} />,
    },
    {
      title: "Comments",
      content: (
        <div>
          <CommentBox onSubmit={handleCommentSubmit} />
          <div className="mt-4 space-y-2">
            {comments.map((comment, index) => (
              <Comment
                key={index}
                content={comment}
                onDelete={() => handleDeleteComment(index)}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
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

        <div className="flex flex-col ml-7 mt-4">
          <div className="flex justify-between">
            <div className="flex content-between flex-col mt-4">
              <h2 className="text-2xl font-bold">{event?.name}</h2>

              <p>
                {new Date(event?.startTime || new Date()).toLocaleString()} -{" "}
                {new Date(event?.endTime || new Date()).toLocaleString()}
              </p>
              <p>{event?.users?.length || 0} Attendies</p>
              <div className="flex flex-row mt-5">
                <button className="ml-3 bg-sky-300 px-4 py-2">Attend</button>
                <button className="ml-3 bg-slate-300 px-4 py-2">Share</button>
              </div>
            </div>
            <div className="w-80">
              <img alt="banner" src={event?.bannerImg || ""} />
            </div>
          </div>
          <div>
            <Tab heading="" tabs={EventTab} />
          </div>
          <div></div>
          <div></div>
        </div>
      </EventProvider>
    </div>
  );
};

export default EventView;
