import React, { FC } from "react";
import { IEvent } from "../../interfaces/Interfaces";
import Tab from "../shared/Tab";

const EventTab = [
  {
    title: "Details",
    content: <div>This is the content of Tab 1</div>,
  },
  {
    title: "Comments",
    content: <div>This is the content of Tab 2</div>,
  },
];

const EventView: FC<{ event: IEvent | undefined }> = function ({ event }) {
  return (
    <div className="flex flex-col ml-7 mt-4">
      <div className="flex justify-between">
        <div className="flex content-between flex-col">
          <h2>{event !== undefined && (event as unknown as IEvent).name}</h2>
          <p>{event?.description}</p>
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
          <img src={event?.bannerImg || ""} alt="banner" />
        </div>
      </div>
      <div>
        <Tab heading="" tabs={EventTab} />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default EventView;
