import { FC, SetStateAction, useContext, useEffect, useState } from "react";
import { HomeIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import CreatePostModal from "../post/CreatePostModel";
import { PostContextType } from "../../types/PostContextType";
import { PostContext } from "../../contexts/PostContext";

interface HeaderProps {
  isCreatePostPopUpVisible?: boolean;
  changeCreatePostPopUpVisiblility?: (visible: boolean) => void;
}

const HomeHeader: FC<HeaderProps> = ({
  isCreatePostPopUpVisible,
  changeCreatePostPopUpVisiblility,
}) => {
  const { posts } = useContext(PostContext) as PostContextType;
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const [searchInput, setSearchInput] = useState("");
  const changePopUpVisibility = () => {
    changeCreatePostPopUpVisiblility &&
      changeCreatePostPopUpVisiblility(!isCreatePostPopUpVisible);
  };

  const handleCreatePostSubmit = (postText: string) => {
    changeCreatePostPopUpVisiblility && changeCreatePostPopUpVisiblility(false);
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchInput(event.target.value);

    const searchResults = !searchInput
      ? posts
      : posts.filter(
          (post) =>
            post.postTitle
              .toLowerCase()
              .includes(searchInput.toLocaleLowerCase()) ||
            post.postMessage
              ?.toLowerCase()
              .includes(searchInput.toLocaleLowerCase()) ||
            post.sender.name
              .toLowerCase()
              .includes(searchInput.toLocaleLowerCase()) ||
            post.postTarget
              .toLowerCase()
              .includes(searchInput.toLocaleLowerCase())
        );

    setFilteredPosts(searchResults);
  };

  const renderSearchResults = () => {
    if (searchInput && filteredPosts.length > 0) {
      return (
        <div className="absolute bg-white shadow-md mt-2 py-2 w-full z-10">
          {filteredPosts.map((post, index) => (
            <div
              key={index}
              className="px-4 py-2 text-gray-600 hover:bg-gray-200 cursor-pointer flex justify-between"
            >
              <div>
                <h4>{post.postTitle}</h4>
                <p>{post.postMessage}</p>
              </div>
              <div className="flex items-center">
                <h4 className="p-1 border border-gray-600 rounded-md bg-white">{post.postTarget}</h4>
              </div>
            </div>
          ))}
          <div className="px-4 py-3 bg-gray-100 text-black font-semibold">
            {filteredPosts.length} Result{filteredPosts.length > 1 ? 's' : ''}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-700">Home</h2>
        </div>
        <button
          className="bg-white text-gray-600 border border-gray-600 py-2 px-4 hover:bg-gray-100 flex items-center"
          onClick={changePopUpVisibility}
        >
          New Post
          <span><PlusIcon className="h-4 w-4 ml-4 text-black"/></span>
        </button>
      </header>
      <hr className="mb-2" />
      <div className="relative w-full bg-white shadow-md">
        <input
          value={searchInput}
          onChange={handleChange}
          type="text"
          placeholder="Search Here"
          className="form-control w-full p-2"
          aria-describedby="basic-addon2"
        />
        {renderSearchResults()}
      </div>
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

export default HomeHeader;
