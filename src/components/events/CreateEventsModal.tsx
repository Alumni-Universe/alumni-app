import React, { useState } from "react";

interface ICreateEvents {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: (
    title: string,
    location: string,
    description: string,
    endDate: string,
    startDate: string,
    image: string
  ) => void;
}

const CreateEvents: React.FC<ICreateEvents> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [CreateTitle, setCreateTitle] = useState("");
  const [CreateLocation, setCreateLocation] = useState("");
  const [CreateStartDate, setCreateStartDate] = useState("");
  const [CreateEndDate, setCreateEndDate] = useState("");
  const [CreateDescription, setCreateDescription] = useState("");
  const [CreateImage, setCreateImage] = useState("");

  const handleCreateTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCreateTitle(event.target.value);
  };

  const handleCreateLocation = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCreateLocation(event.target.value);
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
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCreateImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setCreateImage("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit &&
      onSubmit(
        CreateTitle,
        CreateLocation,
        CreateDescription,
        CreateEndDate,
        CreateStartDate,
        CreateImage
      );
    setCreateTitle("");
    setCreateStartDate("");
    setCreateEndDate("");
    setCreateLocation("");
    onClose && onClose();
  };

  const handleClose = () => {
    console.log("Close icon clicked");
  };

  return (
    <div
      className={`modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex-col flex ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-md p-4 mx-auto mt-16 w-1/2"
        >
          <div className="relative flex items-center justify-center">
            <p className="text-lg">Create Event | Event Types</p>
            <button
              onClick={handleClose}
              className="absolute bottom-4 right-2 text-lg font-semibold"
            >
              &times;
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <span>Event Name:</span>
                <div className="flex justify-between">
                  <input
                    onChange={handleCreateTitleChange}
                    value={CreateTitle}
                    type="text"
                    id="event_title"
                    className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Title"
                  />

                  <input
                    type="file"
                    onChange={handleCreateImageChange}
                    className="h-1/3 bg-slate-300"
                    placeholder="Upload Image"
                  />

                  <select
                    onChange={handleCreateLocation}
                    value={CreateLocation}
                    id="countries"
                    className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a location</option>
                    <option value="US">Experis</option>
                    <option value="CA">Noroff</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col w-full mt-4">
                <span>Event Type</span>
                <div className="flex items-center space-x-4">
                  <div>
                    <input
                      type="radio"
                      id="option1"
                      name="options"
                      value="online"
                      className="form-radio text-blue-600 h-4 w-4"
                    />
                    <label htmlFor="option1" className="ml-2 inline">
                      Online
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="option2"
                      name="options"
                      value="Personally present"
                      className="form-radio text-blue-600 h-4 w-4"
                    />
                    <label htmlFor="option2" className="ml-2 inline">
                      Personally present
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex flex-col">
                  <span>Start date</span>
                  <input
                    onChange={handleCreateStartDateChange}
                    value={CreateStartDate}
                    type="date"
                    id="startDate"
                    className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <span>End date</span>
                  <input
                    onChange={handleCreateEndDateChange}
                    value={CreateEndDate}
                    type="date"
                    id="endDate"
                    className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex">
              <input
                type="file"
                className="h-1/3 bg-slate-300"
                placeholder="Upload Image"
              />
            </div>
          </div>
          <div className="flex mt-4">
            <textarea
              placeholder="Description"
              value={CreateDescription}
              onChange={handleCreateDescriptionChange}
              className="w-full h-48 py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit">Publish Event</button>
          </div>
        </form>
      }
    </div>
  );
};

export default CreateEvents;
