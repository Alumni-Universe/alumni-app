import { FC } from "react";
import { BookmarkIcon } from "@heroicons/react/outline";
import CreatePostModal from "../post/CreatePostModel";

interface HeaderProps {
    isCreatePostPopUpVisible?: boolean;
    changeCreatePostPopUpVisiblility?: (visible: boolean) => void;
  }

const HomeHeader : FC<HeaderProps> = ({isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility}) => {
    
    const changePopUpVisibility = () => {
        changeCreatePostPopUpVisiblility && changeCreatePostPopUpVisiblility(!isCreatePostPopUpVisible);
      };
    
      const handleCreatePostSubmit = (postText: string) => {
        changeCreatePostPopUpVisiblility && changeCreatePostPopUpVisiblility(false);
      };
    
    return(
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <BookmarkIcon className="h-6 w-6 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-700">Home</h2>
            </div>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg" onClick={changePopUpVisibility}>
                New Post
            </button>
            {isCreatePostPopUpVisible && (
            <CreatePostModal
                isOpen={isCreatePostPopUpVisible}
                onClose={() => changeCreatePostPopUpVisiblility && changeCreatePostPopUpVisiblility(false)}
                onSubmit={handleCreatePostSubmit}
                />
            )}
        </header>
    );
};

export default HomeHeader