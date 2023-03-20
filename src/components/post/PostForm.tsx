import React, { useState } from 'react';

interface PostFormProps {
  onSubmit: (text: string) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Post</button>
      {text && (
        <div>
          <p>Post preview:</p>
          <p>{text}</p>
        </div>
      )}
    </form>
  );
};

export default PostForm;
