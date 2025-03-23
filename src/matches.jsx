import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import to get URL parameters
import { sendConnectRequest } from './socket';

const Matches = () => {
  const { cash } = useParams(); // Retrieve 'cash' param from the URL
  const isCashMode = cash === "true"; // Convert 'cash' to a boolean value

  const users = useSelector((state) =>
    isCashMode ? state.userinfo.receivers : state.userinfo.donors // Use receivers/donors based on cash
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Matches</h1>
      {isCashMode && (
        <p className="mb-4 text-lg font-semibold text-center animate-pulse">
          💵 Cash mode is enabled!
        </p>
      )}
      <ol className="space-y-4">
        {users.map(([distance, user], index) => ( // Destructure [distance, user] from each item
          <li
            key={index}
            onClick={() => sendConnectRequest(user.userid.username)} // Send connection request with username
            className="flex justify-between items-center p-4 bg-white text-gray-800 rounded-lg shadow-lg transform transition hover:-translate-y-2 hover:bg-blue-600 hover:text-white duration-300"
          >
            <span className="font-medium">{distance} km</span>
            <span className="font-bold">{user.userid.username}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Matches;

