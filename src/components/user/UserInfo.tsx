import { FC, useContext } from "react";
import { AlumniUserContext } from "../../contexts/AlumniUserContext";
import { AlumniGroupInfoDto, PostInfoDto, PostReplyDto, TopicInfoDto } from "../../interfaces/Dtos";
import { IPost } from "../../interfaces/Interfaces";
import { AlumniUserContextType } from "../../types/AlumniUserContextType";
import Tab from "../shared/Tab";

const timeSince = (date: Date | string) => {
  const parsedDate = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - parsedDate.getTime()) / 1000);

  const intervals: [string, number][] = [
    ["year", Math.floor(seconds / (60 * 60 * 24 * 365))],
    ["month", Math.floor(seconds / (60 * 60 * 24 * 30))],
    ["week", Math.floor(seconds / (60 * 60 * 24 * 7))],
    ["day", Math.floor(seconds / (60 * 60 * 24))],
    ["hour", Math.floor(seconds / (60 * 60))],
    ["minute", Math.floor(seconds / 60)],
  ];

  for (const [key, value] of intervals) {
    if (value > 0) {
      return value === 1 ? `${value} ${key} ago` : `${value} ${key}s ago`;
    }
  }

  return "just now";
};

const UserInfoComponent: FC = () => {
  const { authenticatedUser } = useContext(
    AlumniUserContext
  ) as AlumniUserContextType;

  const createGroupList = () => {
    if (authenticatedUser && authenticatedUser.alumniGroups?.length !== 0) {
      return authenticatedUser.alumniGroups
      ?.map((group: AlumniGroupInfoDto) => (
        <div key={group.groupId}>
          <h4 className="text-md font-semibold pt-1">{group.name}</h4>
          <p className="text-sm text-gray-700 mt-2 pb-1">{group.description}</p>
        </div>
      ));
    } else {
      return <div>No groups found</div>;
    }
  };

  const createTopicList = () => {
    if (authenticatedUser && authenticatedUser.topics?.length !== 0) {
      return authenticatedUser.topics
      ?.map((topic: TopicInfoDto) => (
        <div key={topic.topicId}>
          <h4 className="text-md font-semibold pt-1">{topic.name}</h4>
          <p className="text-sm text-gray-700 mt-2 pb-1">{topic.description}</p>
        </div>
      ));
    } else {
      return <div>No topics found</div>;
    }
  };

  const createPostList = () => {
    if (authenticatedUser && authenticatedUser.postSenders?.length !== 0) {
      return authenticatedUser.postSenders
      ?.filter((p: IPost) => p.replyParentId === null)
      .map((post: PostInfoDto) => (
        <div key={post.postId}>
          <h4 className="text-md font-semibold pt-1">{post.postTitle}</h4>
          <p className="text-sm text-gray-700 mt-2 pb-1">{post.postMessage}</p>
        </div>
      ));
    } else {
      return <div>No posts found</div>;
    }
  };

  const createReplyList = () => {
    if (authenticatedUser && authenticatedUser.postSenders?.filter((p: IPost) => p.replyParentId !== null).length !== 0) {
      return authenticatedUser.postSenders
      ?.filter((p: IPost) => p.replyParentId != null)
      .map((post: PostReplyDto) => (
        <div key={post.postId}>
          <h4 className="text-md font-semibold pt-1">Commented {timeSince(post.lastUpdated)}</h4>
          <p className="text-sm text-gray-700 mt-2 pb-1">{post.postMessage}</p>
        </div>
      ));
    } else {
      return <div>No comments found</div>;
    }
  };

  const InterestTab = [
    {
      title: "Groups",
      content: <div>{createGroupList()}</div>,
    },

    {
      title: "Topics",
      content: <div>{createTopicList()}</div>,
    },
  ];

  const ActivityTab = [
    {
      title: "Posts",
      content: <div>{createPostList()}</div>,
    },
    {
      title: "Comments",
      content: <div>{createReplyList()}</div>,
    }
  ];

  return (
    <div className="w-4/6 bg-white shadow-md p-2">
      <div className="user-name font-bold my-1">
        <span>{authenticatedUser?.name}</span>
      </div>
      <div className="user-current-status font-bold my-1">
        <span>{authenticatedUser?.status}</span>
      </div>
      <div className="user-location font-light my-1">
      <label className="bio-bold font-bold">Fun fact</label>
        <p>{authenticatedUser?.funFact}</p>
      </div>
      <div className="user-bio my-1">
        <label className="bio-bold font-bold">Bio</label>
        <p>
          {authenticatedUser?.bio}
        </p>
      </div>
      <Tab heading="Interests" tabs={InterestTab} />
      <Tab heading="Activity" tabs={ActivityTab} />
    </div>
  );
};

export default UserInfoComponent;
