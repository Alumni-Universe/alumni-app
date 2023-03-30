import React, { useState } from "react";
import Header from "../components/Header";
import CreatePostModal from "../components/post/CreatePostModel";
import Post from "../components/post/Post";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import UserInfoComponent from "../components/user/UserInfo";
import { PostProvider } from "../contexts/PostContext";
import UserHeader from "../components/user/UserHeader";
import UserEventList from "../components/user/UserEventList";

const UserProfile = () => {
  const [isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility] = useState(false);
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
            <Calendar className="mt-2 ml-7 shadow-lg p-2" value={date} onChange={onDateChange} />
            <UserEventList />
          </div>
        </div>
      </div>
  );
};

export default UserProfile;
