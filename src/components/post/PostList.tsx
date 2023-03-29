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
      .sort((a: IPost, b: IPost) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
      .map((p: IPost) => {
        return (
          <div key={p.postId}>
            <PostItem
              postId={p.postId}
              postTitle={p.postTitle}
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
              inverseReplyParent={p.inverseReplyParent}          
              />
          </div>
        );
      });
  };

  return (
    <section className="w-4/6">
      <hr className="mb-2" />
      <div className="">{createPostList()}</div>
    </section>
  );
};

export default PostList;
