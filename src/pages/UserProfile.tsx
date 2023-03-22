import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/shared/Sidebar';
import CreatePostModal from '../components/post/CreatePostModel';
import Post from '../components/post/Post';
import profilePicture from '../assets/noroff.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UserInfoComponent from '../components/user/UserInfo';
import UserDetailTab from '../components/user/UserDetailTab';


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
   <div className="flex h-screen justify-center items-center">
     <div className="flex flex-col justify-center items-center">
       <Header
         heading='Home'
         headerBtnText='New Post'
         isPopUpVisible={isCreatePostModalOpen}
         changePopUpVisibility={toggleCreatePostModal}
       />
       <div className="px-5">
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




        <div className="calendar-container float-right mt-5 mr-5 flex">
         <UserInfoComponent/>
         <Calendar value={date} onChange={onDateChange} />
     </div>


     </div>


   </div>
 );
};


export default UserProfile;