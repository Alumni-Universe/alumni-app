import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlumniGroups from "../pages/AlumniGroups";
import HomePage from "../pages/HomePage";
import UserProfile from "../pages/UserProfile";
import Sidebar from "../components/shared/Sidebar";
import Events from "../pages/Events";
import Topics from "../pages/Topics";
import EventViewDetail from "../pages/EventViewDetail";


const Routing: FC = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="w-1/5">
        <Sidebar />
        </div>
        <div className="w-4/5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/groups" element={<AlumniGroups />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:eventId" element={<EventViewDetail/>} />
            <Route path="/topics" element={<Topics />} />
          </Routes> 
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routing;