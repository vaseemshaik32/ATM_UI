import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Chats = () => {
  const navigator =useNavigate()
  const chatusers=useSelector(state=>state.chts);
  return (
  <div className="p-4 bg-gray-100 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-4 text-gray-800">Chats</h3>
    <ul className="space-y-2">
      {chatusers.map((chatuser) => (
        <li
          key={chatuser}
          className="cursor-pointer p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => {navigator(`/userdashboard/chatwindow/${chatuser}`)}}
        >
          {chatuser}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Chats;
