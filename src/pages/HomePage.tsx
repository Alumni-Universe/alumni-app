import { FC, useState } from "react";
import HomeHeader from "../components/home/HomeHeader";
import UpcomingEventList from "../components/home/UpcomingEventList";
import PostList from "../components/post/PostList";

const HomePage: FC = function () {
  const [isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility] =
    useState(false);

  return (
    <div className="p-2">
      <HomeHeader
        changeCreatePostPopUpVisiblility={changeCreatePostPopUpVisiblility}
        isCreatePostPopUpVisible={isCreatePostPopUpVisible}
      />
      <div className="flex w-full">
        <PostList />
        <UpcomingEventList />
      </div>
    </div>
  );
};

export default HomePage;
