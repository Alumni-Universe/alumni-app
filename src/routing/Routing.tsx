import { FC } from 'react';
import '../App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PostForm from '../pages/PostForm';
import UserProfile from '../pages/UserProfile';
import Sidebar from '../components/Sidebar'

const Routing: FC = () => {
  return (
 <BrowserRouter>
 <div className='flex'>
    <div className='w-1/5'>
      <Sidebar/>
    </div>
    <div className='w-4/5'>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='HomePage' element={<HomePage />} />
        <Route path='UserProfile' element={<UserProfile />} />
        <Route path='PostForm' element={<PostForm onSubmit={function (text: string): void {
          throw new Error('Function not implemented.');
        } } />} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default Routing;