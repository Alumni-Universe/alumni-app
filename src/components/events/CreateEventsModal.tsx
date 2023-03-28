import { createEvent } from '@testing-library/react';
import React, { FC, SetStateAction, useEffect, useState, useContext } from 'react';
import DatePicker from 'react-modern-calendar-datepicker';
import { redirect } from 'react-router-dom';
import { EventContext } from '../../contexts/EventContext';
import { ICreateEventPayload, IEvent } from '../../interfaces/Interfaces';
import { EventContextType } from '../../types/EventContextType';
import Comment from './DeleteComment';


interface CreateEvents {
  isOpen: boolean;
  modalMode: string;
  changeCreateEventPopUpVisiblility: Function
}


const CreateEvents: FC<CreateEvents> = ({ isOpen, modalMode, changeCreateEventPopUpVisiblility }) => {
  const { selectedEventId, events, postEvent, updateEvent,  } = useContext(EventContext) as EventContextType;
  const [CreateTitle, setCreateTitle] = useState('');
  const [CreateLocation, setCreateLocation] = useState('');
  const [CreateStartDate, setCreateStartDate] = useState('');
  const [CreateEndDate, setCreateEndDate] = useState('');
  const [CreateDescription, setCreateDescription] = useState('');
  const [CreateImage, setCreateImage] = useState('');
  const [currentEvent, setCurrentEvent] = useState <IEvent | {}>({});

  useEffect(() => {
    if (modalMode !== 'CREATE') {
      const eventDetails = events.find((e: IEvent) => e.eventId === selectedEventId);
      if(eventDetails) {
        setCurrentEvent(eventDetails);
        setCreateTitle(eventDetails.name);
        setCreateStartDate(new Date(eventDetails.startTime).toISOString().slice(0, 10));
        setCreateEndDate(new Date(eventDetails.endTime).toISOString().slice(0, 10));
        setCreateLocation('');
        setCreateDescription(eventDetails?.description || "");
        setCreateURL('');
      }
    }
  }, [])

  const handleCreateTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCreateTitle(event.target.value);
  };

  const handleCreateLocation = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLocation = event.target.value;

    if (selectedLocation === "add_new_location") {
      const newLocationName = prompt("Enter the new location name:");
      if (newLocationName) {
        const newLocation = {
          value: newLocationName.toUpperCase().slice(0, 2),
          name: newLocationName,
        };
        addNewLocation(newLocation);
        setCreateLocation(newLocation.value);
      } else {
        event.target.value = CreateLocation;
      }
    } else {
      setCreateLocation(selectedLocation);
    }
  };

  const handleCreateURLChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCreateURL(event.target.value);
  };

  const handleCreateStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCreateStartDate(event.target.value);
  };

  const handleCreateEndDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCreateEndDate(event.target.value);
  };

  const handleCreateDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateDescription(event.target.value);
  };

  const handleCreateImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setCreateImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const isFormValid = (): boolean => {
    if (CreateLocation === "") {
      alert("Location is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid()) {
      return;
    }

    if (modalMode === 'CREATE'){

      const postPayload: ICreateEventPayload = {
        name: CreateTitle,
        description: CreateDescription,
        allowGuests: true,
        bannerImg: CreateImage,
        startTime: CreateStartDate,
        endTime: CreateEndDate,
        createdBy: "1"
      }
      await postEvent(postPayload);
    }else{

      const eventPayload: IEvent = {
        name: CreateTitle,
        eventId: selectedEventId,
        description: CreateDescription,
        allowGuests: true,
        bannerImg: ('bannerImg' in currentEvent) ? currentEvent.bannerImg : '',
        startTime: new Date(CreateStartDate).toISOString(),
        endTime: new Date(CreateEndDate).toISOString(),
        createdBy: "1",
      };
      await updateEvent(eventPayload, selectedEventId);
    }

    setCreateTitle('');
    setCreateStartDate('');
    setCreateEndDate('');
    setCreateLocation('');
    setCreateDescription('');
    setCreateURL('');
    changeCreateEventPopUpVisiblility(false);
  };

  const handleClose = async () => {
    console.log("Close icon clicked");
    const userResponse = await window.confirm(
      "You have unsaved changes, are you sure you want to close it?"
    );
    if (userResponse) {
      setCreateTitle("");
      setCreateStartDate("");
      setCreateEndDate("");
      setCreateLocation("");
      setCreateDescription("");
      setCreateURL("");
      changeCreateEventPopUpVisiblility(false);
    }
  };

  const getMinEndDate = () => {
    if (CreateStartDate === "") return new Date().toISOString().slice(0, 10);
    return new Date(CreateStartDate).toISOString().slice(0, 10);
  };

  const [locations, setLocations] = useState([
    { value: "US", name: "Experis" },
    { value: "CA", name: "Noroff" },
  ]);

  const addNewLocation = (newLocation: { value: string; name: string }) => {
    setLocations([...locations, newLocation]);
  };

  const [CreateURL, setCreateURL] = useState("");

  return (
    <div className={`modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex-col flex ${isOpen ? 'block' : 'hidden'}`}>
    {<form onSubmit={handleSubmit} className="bg-white rounded-md p-4 mx-auto mt-16 w-1/2">
    <div className="relative flex items-center justify-center">
    <p className="text-lg">{ modalMode === 'CREATE' ? 'Create' : 'Update'} Event | Event Types</p>
    <button
      onClick={handleClose}
      className="absolute bottom-4 right-2 text-lg font-semibold"
    >
      &times;
    </button>
  </div>
      <div className='flex justify-between mt-4'>
        <div className='flex flex-col w-full'>

          <div className='flex flex-col w-full'>
            <span>
              Event Name:
            </span>
            <div className='flex justify-between'>

                <input required onChange={handleCreateTitleChange} value={CreateTitle} type="text" id="event_title" className='mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Title" />

                <select required onChange={handleCreateLocation} value={CreateLocation} id="countries" className='mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option selected>Choose a location</option>
                  {locations.map((location) => (
                    <option key={location.value} value={location.value}>{location.name}</option>
                  ))}
                  <option value="add_new_location">Add new location...</option>
              </select>



            </div>
          </div>
          <div className='flex flex-col w-full mt-4'>
            <span>
              Event Type
            </span>
            <div className="flex items-center space-x-4">
              <div>
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="Public"
                  className="form-radio text-blue-600 h-4 w-4"
                />
                <label htmlFor="option1" className="ml-2 inline">
                  Public
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value="Private"
                  className="form-radio text-blue-600 h-4 w-4"
                />
                <label htmlFor="option2" className="ml-2 inline">
                  Private
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-between mt-4'>
            <div className='flex flex-col'>
              <span>
                Start date
              </span>
                <input required min={new Date().toISOString().slice(0, 10)} onChange={handleCreateStartDateChange} value={CreateStartDate} type="date" id="startDate" className='mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>

            <div className='flex flex-col'>
              <span>
                End date
              </span>
                <input required min={getMinEndDate()} onChange={handleCreateEndDateChange} value={CreateEndDate} type="date" id="endDate" className='mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
              <div></div>
          </div>
          <div>

          </div>
        </div>
        <div className='flex'>
          <input type="file" className='h-1/3 bg-slate-300'
            placeholder='Upload Image'
          />

        </div>

      </div>
      <div className='flex mt-4'>
        <textarea
          placeholder="Description"
          value={CreateDescription}
          onChange={handleCreateDescriptionChange}
          className="w-full h-48 py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
        />

        </div>
        <div>
          <input
            type="url"
            id="event_url"
            value={CreateURL}
            onChange={handleCreateURLChange}
            className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Watch the link online"
          />

      </div>
      <div className='flex justify-end'>
        <button type='submit'> {modalMode === 'CREATE' ? 'Publish' : 'Update'} Event</button>

      </div>
    </form>}

  </div>
  );
};

export default CreateEvents;

