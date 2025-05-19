import React from 'react';
import { useNavigate } from 'react-router-dom';
function Readme() {
  const navigator=useNavigate()
  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to ChickenFish!</h1>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        Tired of those long ATM lines? Whether you're depositing or withdrawing cash.
        what if we could match people wanting to deposit cash with those who want to withdraw it?
      </p>
      <ol className="list-decimal list-inside text-gray-200 space-y-4">
        <li>
          <span className="font-semibold">Register and login:</span> Enter the amount you want to exchange.
        </li>
        <li>
          <span className="font-semibold">Choose your exchange type:</span> Cash or digital currency. The app will provide matches—cash to digital or digital to cash.
        </li>
        <li>
          <span className="font-semibold">Pick a match:</span> Choose the closest person and click their name to send a chat request.
        </li>
        <li>
          <span className="font-semibold">Accept chat requests:</span> Other users can send you chat requests, and you can accept them.
        </li>
        <li>
          <span className="font-semibold">Start chatting:</span> Check the users who accepted your requests in the chat section. Click their name and start chatting.
        </li>
        <li>
          <span className="font-semibold">Explore more matches:</span> Go back to matches and choose another user to chat with.
        </li>
      </ol>
      <div className="text-center mt-8">
        <button onClick={()=>navigator('/')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md">
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Readme;

