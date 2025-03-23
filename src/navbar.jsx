import React from "react";
import { useNavigate } from "react-router-dom";
import { userlogout } from "./api";
export default function Navbar() {
  const navigator = useNavigate();

  return (
    <nav className="bg-gray-800 text-gray-300 shadow-md fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4">
      <div className="flex space-x-6">
        <div
          onClick={() => navigator('/userdashboard/chats')}
          className="cursor-pointer text-lg font-bold text-blue-400 hover:text-blue-500 transition duration-200"
        >
          Chats
        </div>
        <div
          onClick={() => navigator('/userdashboard/requests')}
          className="cursor-pointer text-lg font-bold text-purple-400 hover:text-purple-500 transition duration-200"
        >
          Requests
        </div>
      </div>
      <button
        onClick={() =>userlogout(navigator) }
        className="bg-green-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-green-700 transition-transform transform hover:scale-105"
      >
        Logout
      </button>
    </nav>
  );
}
