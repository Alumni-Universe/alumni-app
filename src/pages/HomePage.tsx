import React, { useState } from 'react';
import CreatePost from '../components/CreatePost';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = function(){
    const [isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility] = useState(false);

    return(
        <div className='pl-2 pr-2'>
        <Header changeCreatePostPopUpVisiblility={changeCreatePostPopUpVisiblility} isCreatePostPopUpVisible={isCreatePostPopUpVisible}/> 
        <CreatePost isCreatePostPopUpVisible={isCreatePostPopUpVisible}/>

    </div>
    );

};

export default HomePage;