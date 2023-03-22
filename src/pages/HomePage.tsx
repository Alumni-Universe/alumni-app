import React, { FC, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/shared/Sidebar';

const HomePage: FC = function(){
    const [isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility] = useState(false);

    return(
        <div className='pl-2 pr-2'>
            {/* <Header changeCreatePostPopUpVisiblility={changeCreatePostPopUpVisiblility} isCreatePostPopUpVisible={isCreatePostPopUpVisible}/>  */}
            {/* <CreatePost isCreatePostPopUpVisible={isCreatePostPopUpVisible}/> */}
        </div>
    );

};

export default HomePage;