import React from "react";
import { useSelector } from "react-redux";
import { acceptConnectRequest } from "../RealTime/socket";

const Requests = () => {
  const chatrequestusers = useSelector((state) => state.req);

  return (
    <div className="p-6 bg-black rounded-3xl shadow-glow border-2 border-neon-pink mt-6">
      <h3 className="text-3xl font-extrabold text-neon-green mb-6 text-center">
        Requests
      </h3>
      <ul className="space-y-4">
        {chatrequestusers.map((chatrequestuser) => (
          <li
            key={chatrequestuser}
            className="flex items-center justify-between p-4 bg-black border border-neon-green text-neon-pink rounded-lg shadow-glow transform transition hover:scale-105 hover:bg-neon-green hover:text-black duration-300"
          >
            <span className="font-bold">{chatrequestuser}</span>
            <button
              className="px-6 py-3 bg-neon-pink text-black rounded-lg font-bold hover:bg-neon-green hover:text-black transition-transform transform hover:scale-105 shadow-glow"
              onClick={() =>
                acceptConnectRequest(
                  chatrequestuser,
                  localStorage.getItem("usernameforreact")
                )
              }
            >
              Accept
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requests;
