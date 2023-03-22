import { FC, useEffect, useState } from "react";
import Header from "../components/Header";
import CreateEvents from "../components/events/CreateEventsModal";
import EventsList from "../components/events/EventList";



const Events: FC = () => {
    const [isCreateEventModalOpen, toggleEventModal] = useState(false);


    const toggleCreateEventModal = () => {
        toggleEventModal(!isCreateEventModalOpen);
    };



    return (
        <section className="flex flex-col ml-12 w-full">
            <Header
                heading="Events"
                headerBtnText="Create"
                isPopUpVisible={isCreateEventModalOpen}
                changePopUpVisibility={toggleCreateEventModal}
            />
            <EventsList isCreateEventModalOpen={isCreateEventModalOpen} toggleCreatePostPopUp={toggleCreateEventModal}/>


        </section>
    )
}


export default Events;