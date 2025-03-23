import React from "react";
import { useSelector } from "react-redux";
import { acceptConnectRequest } from "./socket";
const Requests = () => {

  const chatrequestusers= useSelector(state=>state.req);
  return (
  <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-6">
    <h3 className="text-xl font-bold mb-4 text-gray-800">Requests</h3>
    <ul className="space-y-2">
      {chatrequestusers.map((chatrequestuser) => (
        <li
          key={chatrequestuser}
          className="flex items-center justify-between p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          <span>{chatrequestuser}</span>
          <button
            className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
            onClick={() => acceptConnectRequest(chatrequestuser,localStorage.getItem('usernameforreact'))}
          >
            Accept
          </button>
        </li>
      ))}
    </ul>
  </div>
  )};

export default Requests;

