import { FC, useState } from "react";
import HomeHeader from "../components/home/HomeHeader";
import UpcomingEventList from "../components/home/UpcomingEventList";
import PostList from "../components/post/PostList";
import { EventProvider } from "../contexts/EventContext";
import { PostProvider } from "../contexts/PostContext";

const HomePage: FC = function () {
  const [isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility] =
    useState(false);

  return (
    <div className="pl-2 pr-2">
      <PostProvider
        postTitle={""}
        postId={0}
        lastUpdated={new Date()}
        postMessage={null}
        postTarget={""}
        senderId={0}
        replyParentId={null}
        targetUser={null}
        targetGroup={null}
        targetTopic={null}
        targetEvent={null}
        sender={{ userId: "", name: "" }}
      >
        <HomeHeader
          changeCreatePostPopUpVisiblility={changeCreatePostPopUpVisiblility}
          isCreatePostPopUpVisible={isCreatePostPopUpVisible}
        />
      </PostProvider>

      <div className="flex w-full">
        <PostProvider
          postTitle={""}
          postId={0}
          lastUpdated={new Date()}
          postMessage={null}
          postTarget={""}
          senderId={0}
          replyParentId={null}
          targetUser={null}
          targetGroup={null}
          targetTopic={null}
          targetEvent={null}
          sender={{ userId: "", name: "" }}
        >
          <PostList />
        </PostProvider>

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
          <UpcomingEventList />
        </EventProvider>
      </div>
    </div>
  );
};

export default HomePage;
