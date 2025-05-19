import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Chats = () => {
  const navigator = useNavigate();
  const chatusers = useSelector((state) => state.chts);

  return (
    <div className="p-6 bg-black rounded-3xl shadow-glow border-2 border-neon-pink">
      <h3 className="text-3xl font-extrabold text-neon-green mb-6 text-center">
        Chats
      </h3>
      <ul className="space-y-4">
        {chatusers.map((chatuser) => (
          <li
            key={chatuser}
            className="cursor-pointer p-4 bg-black border border-neon-green text-neon-pink rounded-lg shadow-glow transform transition hover:scale-105 hover:bg-neon-green hover:text-black"
            onClick={() => {
              navigator(`/userdashboard/chatwindow/${chatuser}`);
            }}
          >
            {chatuser}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chats;
