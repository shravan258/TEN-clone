import React from 'react';
import './chatbtn.css';
import ChatIcon from '@mui/icons-material/Chat';

const ChatButton = () => {
  return (
    <div>
      <button className='chat-button'>
        <ChatIcon fontSize='large' />
      </button>
    </div>
  );
};

export default ChatButton;
