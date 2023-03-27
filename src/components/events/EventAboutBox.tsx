import React, { FC } from "react";
import { IEvent } from "../../interfaces/Interfaces";

const EventAboutBox: FC<{ event: IEvent | undefined }> = function ({ event }) {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold mb-3">About</h2>
      <div className="border rounded px-5 py-3">
        <p>{event?.description}</p>
      </div>
    </div>
  );
};

export default EventAboutBox;
