import { FC, useState } from "react";
import HomeHeader from "../components/home/HomeHeader";
import PostList from "../components/post/PostList";
import { PostProvider } from "../contexts/PostContext";

const HomePage: FC = function () {
  const [isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility] =
    useState(false);

  return (
    <div className="pl-2 pr-2">
      <HomeHeader
        changeCreatePostPopUpVisiblility={changeCreatePostPopUpVisiblility}
        isCreatePostPopUpVisible={isCreatePostPopUpVisible}
      />
      <div className="w-3/5">
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
      </div>
    </div>
  );
};

export default HomePage;
