import { FC, useContext } from "react";
import { IPost } from "../../interfaces/Interfaces";
import PostItem from "./PostItem";
import { PostContext } from "../../contexts/PostContext";
import { PostContextType } from "../../types/PostContextType";

const PostList: FC = () => {
  const { posts } = useContext(PostContext) as PostContextType;

  const createPostList = () => {
    return posts
      .filter((p: IPost) => p.replyParentId === null)
      .map((p: IPost, key: number) => {
        return (
          <div key={key}>
            <PostItem
              postId={p.postId}
              lastUpdated={p.lastUpdated}
              sender={p.sender}
              postTarget={p.postTarget}
              postMessage={p.postMessage}
              senderId={p.senderId}
              replyParentId={p.replyParentId}
              targetUser={p.targetUser}
              targetGroup={p.targetGroup}
              targetTopic={p.targetTopic}
              targetEvent={p.targetEvent}
            />
          </div>
        );
      });
  };

  return (
    <section>
      <hr className="mb-1" />
      <div>{createPostList()}</div>
    </section>
  );
};

export default PostList;
