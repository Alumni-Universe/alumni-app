import { FC } from "react";
import { HomeIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import CreatePostModal from "../post/CreatePostModel";

interface UserProps {
  isCreatePostPopUpVisible?: boolean;
  changeCreatePostPopUpVisiblility?: (visible: boolean) => void;
}

const UserHeader: FC<UserProps> = ({
  isCreatePostPopUpVisible,
  changeCreatePostPopUpVisiblility,
}) => {
  const changePopUpVisibility = () => {
    changeCreatePostPopUpVisiblility &&
      changeCreatePostPopUpVisiblility(!isCreatePostPopUpVisible);
  };

  const handleCreatePostSubmit = () => {
    changeCreatePostPopUpVisiblility && changeCreatePostPopUpVisiblility(false);
  };

  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-700">
            User Dashboard
          </h2>
        </div>
        <button
          className="bg-white text-gray-600 border border-gray-600 py-2 px-4 hover:bg-gray-100 flex items-center"
          onClick={changePopUpVisibility}
        >
          New Post
          <span>
            <PlusIcon className="h-4 w-4 ml-4 text-black" />
          </span>
        </button>
      </header>
      <hr className="mb-2" />
      {isCreatePostPopUpVisible && (
        <CreatePostModal
          isOpen={isCreatePostPopUpVisible}
          onClose={() =>
            changeCreatePostPopUpVisiblility &&
            changeCreatePostPopUpVisiblility(false)
          }
          onSubmit={handleCreatePostSubmit}
        />
      )}
    </>
  );
};

export default UserHeader;
