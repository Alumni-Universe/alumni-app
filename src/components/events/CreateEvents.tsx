import React, { useState } from 'react';
import DatePicker from 'react-modern-calendar-datepicker';
import { redirect } from 'react-router-dom';

interface CreateEvents {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: (title: string, startDate: string, endDate: string, description: string, image: string) => void;
}

const CreateEvents: React.FC<CreateEvents> = ({ isOpen, onClose, onSubmit }) => {
  const [CreateTitle, setCreateTitle] = useState('');
  const [CreateStartDate, setCreateStartDate] = useState('');
  const [CreateEndDate, setCreateEndDate] = useState('');
  const [CreateDescription, setCreateDescription] = useState('');
  const [CreateImage, setCreateImage] = useState('');

  const handleCreateTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateTitle(event.target.value);
  };

  const handleCreateStartDateChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCreateStartDate(event.target.value);
  };

  const handleCreateEndDateChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCreateEndDate(event.target.value);
  };

  const handleCreateDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCreateDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit && onSubmit(CreateTitle, CreateDescription, CreateEndDate, CreateStartDate, CreateImage);
    setCreateTitle('');
    setCreateStartDate('');
    setCreateEndDate ('');
    onClose && onClose();
  };

  return (
    <div className={`modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
      <form onSubmit={handleSubmit} className="bg-white rounded-md p-4 mx-auto mt-16 w-1/2">
        <h2 className="text-xl mb-4">Create a Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={CreateTitle}
          onChange={handleCreateTitleChange}
          className="w-full h-12 py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
        />
        <textarea
          placeholder="Start Date"
          value={CreateStartDate}
          onChange={handleCreateStartDateChange}
          className="w-full h-48 py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
        
        />
        <textarea
          placeholder="End Date"
          value={CreateStartDate}
          onChange={handleCreateEndDateChange}
          className="w-full h-48 py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
        />

        <textarea
          placeholder="Description"
          value={CreateDescription}
          onChange={handleCreateDescriptionChange}
          className="w-full h-48 py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
        />

        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 text-white py-2 px-4 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvents;
