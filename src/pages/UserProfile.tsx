import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import UserInfoComponent from "../components/user/UserInfo";
import UserHeader from "../components/user/UserHeader";
import UserEventList from "../components/user/UserEventList";

const UserProfile = () => {
  const [isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility] =
    useState(false);
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate: Date | Date[]) => {
    setDate(newDate as Date);
  };

  return (
    <div className="p-2">
      <UserHeader
        changeCreatePostPopUpVisiblility={changeCreatePostPopUpVisiblility}
        isCreatePostPopUpVisible={isCreatePostPopUpVisible}
      />
      <div className="flex w-full">
        <UserInfoComponent />
        <div className="w-2/6">
          <Calendar
            className="mt-1 ml-2 shadow-lg"
            value={date}
            onChange={onDateChange}
          />
          <UserEventList />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
