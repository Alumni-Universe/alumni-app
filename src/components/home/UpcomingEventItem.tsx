import { FC, useState } from "react";
import { IEvent } from "../../interfaces/Interfaces";

const getEventTimeRange = (
  startTime: Date | string,
  endTime: Date | string
) => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const startHours = start.getHours().toString().padStart(2, "0");
  const startMinutes = start.getMinutes().toString().padStart(2, "0");
  const endHours = end.getHours().toString().padStart(2, "0");
  const endMinutes = end.getMinutes().toString().padStart(2, "0");
  return `${startHours}:${startMinutes}-${endHours}:${endMinutes}`;
};

const getEventStartDate = (startTime: Date | string) => {
  const start = new Date(startTime);
  const day = start.getDate().toString().padStart(2, "0");
  const month = start.toLocaleString("default", { month: "short" });
  return `${day}. ${month}`;
};

const UpcomingEventItem: FC<IEvent> = ({
  eventId,
  name,
  description,
  allowGuests,
  bannerImg,
  startTime,
  endTime,
  createdBy,
}) => {
  const timeRange = getEventTimeRange(startTime, endTime);
  const startDate = getEventStartDate(startTime);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <article className="flex items-center justify-between p-1">
      <div className="flex items-center justify-between">
        <div className="p-2">
          <h4 className="p-1 bg-gray-200 font-semibold text-sm">{startDate}</h4>
        </div>
        <div className="p-2 ml-4">
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{timeRange}</p>
        </div>
      </div>
      <div className="p-2">
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
                <p className="text-sm">Turn off notification</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <p className="text-sm">Share</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <p className="text-sm text-red-500">Report content</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};

export default UpcomingEventItem;
