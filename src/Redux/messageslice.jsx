import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
    name: 'messages',
    initialState: {}, // Dictionary-like state, e.g., { John: [{...}, {...}], Doe: [{...}] }
    reducers: {
        // Add a message to a specific user
        addMessage: (state, action) => {
            const { key, msg, received } = action.payload;
            
            if (!state[key]) {
                // If the key doesn't exist, initialize it with an empty array
                state[key] = [];
            }
            // Add the new message to the user's message list
            state[key].push({ msg, received });
        }
    }
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;



/*import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const ChatWindow = ({ matchedUsername }) => {
  // Get chat messages of the matched user from Redux store
  const messages = useSelector((state) => state.messages[matchedUsername] || []);

  // Scroll to the bottom of the chat when a new message is sent/received
  const chatRef = useRef(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full max-h-[600px] bg-gray-100 border border-gray-300 rounded-lg">
  
      <div className="bg-blue-500 text-white p-4 text-xl font-bold">
        Chat with {matchedUsername}
      </div>


      <div
        className="flex-1 p-4 overflow-y-auto"
        ref={chatRef}
        style={{ maxHeight: "calc(100% - 50px)" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.received ? "justify-start" : "justify-end"
            } mb-4`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg shadow-md ${
                message.received
                  ? "bg-gray-300 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              <p>{message.msg}</p>
              <p className="text-xs text-gray-600 mt-1 text-right">
                {new Date(message.time).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>


      <div className="flex p-3 bg-white border-t border-gray-300">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
*/




/*
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "./messagesSlice"; // Add action to update Redux store

const ChatWindow = ({ matchedUsername }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(""); // Local state for the input field
  const messages = useSelector((state) => state.messages[matchedUsername] || []);

  const chatRef = useRef(null);
  const wsRef = useRef(null); // Ref to store the WebSocket connection

  // Establish WebSocket connection
  useEffect(() => {
    wsRef.current = new WebSocket("ws://your-websocket-server-url");

    wsRef.current.onopen = () => {
      console.log("WebSocket connection established");
      // Optionally, send an initial message identifying the session/user
      wsRef.current.send(JSON.stringify({ type: "join", username: matchedUsername }));
    };

    wsRef.current.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      if (receivedMessage.username === matchedUsername) {
        dispatch(addMessage({ username: matchedUsername, message: receivedMessage }));
      }
    };

    wsRef.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [matchedUsername, dispatch]);

  // Scroll to the bottom when messages are updated
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (message.trim() !== "") {
      const msgObject = {
        username: matchedUsername,
        msg: message,
        time: new Date().toISOString(),
        received: false,
      };
      wsRef.current.send(JSON.stringify(msgObject)); // Send message via WebSocket
      dispatch(addMessage({ username: matchedUsername, message: msgObject })); // Add to Redux store
      setMessage(""); // Clear input field
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[600px] bg-gray-100 border border-gray-300 rounded-lg">

      <div className="bg-blue-500 text-white p-4 text-xl font-bold">
        Chat with {matchedUsername}
      </div>

 
      <div
        className="flex-1 p-4 overflow-y-auto"
        ref={chatRef}
        style={{ maxHeight: "calc(100% - 50px)" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.received ? "justify-start" : "justify-end"
            } mb-4`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg shadow-md ${
                message.received
                  ? "bg-gray-300 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              <p>{message.msg}</p>
              <p className="text-xs text-gray-600 mt-1 text-right">
                {new Date(message.time).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>


      <div className="flex p-3 bg-white border-t border-gray-300">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
*/