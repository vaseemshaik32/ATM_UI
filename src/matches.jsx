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
    <div className="min-h-screen bg-black p-6 text-neon-green">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-neon-pink">
        Matches
      </h1>
      {isCashMode && (
        <p className="mb-4 text-lg font-semibold text-center text-neon-green animate-pulse">
          💵 Cash mode is enabled!
        </p>
      )}
      <ol className="space-y-4">
        {users.map(([distance, user], index) => ( // Destructure [distance, user] from each item
          <li
            key={index}
            onClick={() => sendConnectRequest(user.userid.username)} // Send connection request with username
            className="flex justify-between items-center p-4 bg-black border-2 border-neon-pink text-neon-green rounded-lg shadow-glow transform transition hover:translate-y-1 hover:bg-neon-pink hover:text-black duration-300"
          >
            <span className="font-bold">{distance} km</span>
            <span className="font-bold">{user.userid.username}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Matches;
