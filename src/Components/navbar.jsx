import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux"; 
import { userlogout } from "../APIs/api.jsx";
export default function Navbar() {
  const navigator = useNavigate();

  // Select Redux states for chats and requests
  const chats = useSelector((state) => state.chts);
  const requests = useSelector((state) => state.req);

  // Track lengths for chats and requests
  const [prevChatCount, setPrevChatCount] = useState(0);
  const [prevRequestCount, setPrevRequestCount] = useState(0);

  // Flags for new entries
  const [hasNewChats, setHasNewChats] = useState(false);
  const [hasNewRequests, setHasNewRequests] = useState(false);

  // Effect to detect new chats
  useEffect(() => {
    if (chats.length > prevChatCount) {
      setHasNewChats(true);
    }
    setPrevChatCount(chats.length);
  }, [chats, prevChatCount]);

  // Effect to detect new requests
  useEffect(() => {
    if (requests.length > prevRequestCount) {
      setHasNewRequests(true);
    }
    setPrevRequestCount(requests.length);
  }, [requests, prevRequestCount]);

  // On navigation, reset indicators
  const handleChatClick = () => {
    setHasNewChats(false);
    navigator('/userdashboard/chats');
  };

  const handleRequestClick = () => {
    setHasNewRequests(false);
    navigator('/userdashboard/requests');
  };

  // Matches click handler
  const handlematchesclick = () => {
    const matchescash = localStorage.getItem('matchescash');
    if (!matchescash) {
      alert('Choose one of the options');
    } else {
      if (matchescash==='true'){navigator(`/userdashboard/matches/true`);}
      else{navigator(`/userdashboard/matches/false`);}
    }
  };

  return (
    <nav className="bg-gray-800 text-gray-300 shadow-md fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4">
      <div className="flex space-x-6">
        {/* Chats Button */}
        <div
          onClick={handleChatClick}
          className={`relative cursor-pointer text-lg font-bold ${
            hasNewChats ? "text-red-500 animate-pulse" : "text-blue-400"
          } hover:text-blue-500 transition duration-200`}
        >
          {hasNewChats && <span className="absolute -top-1 -right-3 w-2 h-2 bg-red-500 rounded-full"></span>}
          Chats
        </div>

        {/* Requests Button */}
        <div
          onClick={handleRequestClick}
          className={`relative cursor-pointer text-lg font-bold ${
            hasNewRequests ? "text-red-500 animate-pulse" : "text-purple-400"
          } hover:text-purple-500 transition duration-200`}
        >
          {hasNewRequests && <span className="absolute -top-1 -right-3 w-2 h-2 bg-red-500 rounded-full"></span>}
          Requests
        </div>

        {/* Matches Button */}
        <div
          onClick={handlematchesclick}
          className="cursor-pointer text-lg font-bold text-green-400 hover:text-green-500 transition duration-200"
        >
          Matches
        </div>
      </div>
      <button
        onClick={() => userlogout(navigator)}
        className="bg-green-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-green-700 transition-transform transform hover:scale-105"
      >
        Logout
      </button>
    </nav>
  );
}
