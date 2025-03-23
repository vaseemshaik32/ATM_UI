import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { sendMessageToMatch } from './socket'; // Import the WebSocket function
import { useParams } from 'react-router-dom';

const ChatWindow = () => {
  const [messageInput, setMessageInput] = useState('');
  const {nameofmatch}= useParams()
  const messagesEndRef = useRef(null); // To scroll to the latest message
  const messages = useSelector((state) => state.messages[nameofmatch] || []); // Fetch messages for the current chat

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;

    const msgfrom = localStorage.getItem('usernameforreact'); // Current user ID
    sendMessageToMatch(msgfrom, nameofmatch, messageInput); // Send the message via WebSocket

    setMessageInput(''); // Clear the input field
  };

  return (
    <div className="flex flex-col bg-blue-100 h-[90vh] max-w-3xl mx-auto rounded-lg shadow-lg">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 text-lg font-bold shadow-md rounded-t-lg">
        Chat with {nameofmatch}
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-3 rounded-lg ${
              msg.received
                ? 'bg-gray-200 text-gray-800 self-start' // Received messages on the left
                : 'bg-blue-500 text-white self-end' // Sent messages on the right
            }`}
            style={{
              maxWidth: '66%', // Occupy up to 2/3rd of the chat window
              wordWrap: 'break-word', // Wrap text to the next line if it's too long
            }}
          >
            {msg.msg}
          </div>
        ))}
        {/* Invisible element to maintain scroll-to-bottom */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="bg-gray-100 p-4 flex items-center space-x-2 shadow-inner rounded-b-lg">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-gray-400 bg-white text-gray-800 font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
        />
        <button
          onClick={()=>handleSendMessage()}
          className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
