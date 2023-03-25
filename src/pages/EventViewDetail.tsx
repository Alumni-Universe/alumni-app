import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventView from "../components/events/EventView";
import Header from "../components/Header";
import { IEvent } from "../interfaces/Interfaces";
import { EventService } from "../services/EventService";

const EventViewDetail = function () {
 
  return (
    <div>
      

       <EventView/>
    </div>
  );
};

export default EventViewDetail;
