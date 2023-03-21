import React, { useState } from 'react';
import Header from '../components/Header';
import CreatePostModal from '../components/CreatePostModel';
import Post from '../components/Post';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UserInfoComponent from '../components/user/UserInfo';
import UserEvents from '../components/user/UserEvent/UserEvents';

interface PostData {
  id: number;
  title: string;
  content: string;
}

const UserProfile = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [date, setDate] = useState(new Date());

  const toggleCreatePostModal = () => {
    setIsCreatePostModalOpen(!isCreatePostModalOpen);
  };

  const handlePostSubmit = (title: string, content: string) => {
    const newPost: PostData = {
      id: Date.now(),
      title,
      content,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const handleDeletePost = (postId: number) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const onDateChange = (newDate: Date | Date[]) => {
    setDate(newDate as Date);
  };

  return (
    <div className="flex h-screen">
      <div className="">
        {/* <Header
          isCreatePostPopUpVisible={isCreatePostModalOpen}
          changeCreatePostPopUpVisiblility={toggleCreatePostModal}
        /> */}
        <div className="">
          {posts.map((post) => (
            <Post
              key={post.id}
              postTitle={post.title}
              postContent={post.content}
              onDelete={() => handleDeletePost(post.id)}
            />
          ))}
        </div>
        <CreatePostModal
          isOpen={isCreatePostModalOpen}
          onClose={toggleCreatePostModal}
          onSubmit={handlePostSubmit}
        />
      </div>
      <div className="flex">
          <UserInfoComponent />
          <div className="flex-col">
          <Calendar value={date} onChange={onDateChange} />
          <UserEvents />
          </div>
        </div>
    </div>
  );  
};

export default UserProfile;