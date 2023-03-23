import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlumniGroups from "../pages/AlumniGroups";
import HomePage from "../pages/HomePage";
import UserProfile from "../pages/UserProfile";
import Sidebar from "../components/shared/Sidebar";
import Events from "../pages/Events";
import Topics from "../pages/Topics";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="w-1/6">
        <Sidebar />
        </div>
        <div className="w-5/6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/groups" element={<AlumniGroups />} />
            <Route path="/events" element={<Events />} />
            <Route path="/topics" element={<Topics />} />
          </Routes> 
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
