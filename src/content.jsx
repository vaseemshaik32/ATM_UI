import { getcashguys, getdigitalguys } from "./api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Content = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleGetCash = () => {
    if (!amount) {
      alert("Please enter an amount!");
      return;
    }
    console.log("Get Cash clicked with amount:", amount);
    getcashguys(navigator, dispatch, amount);
  };

  const handleGetDigital = () => {
    if (!amount) {
      alert("Please enter an amount!");
      return;
    }
    console.log("Get Digital clicked with amount:", amount);
    getdigitalguys(navigator, dispatch, amount);
  };

  return (
    <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-glow p-8 border border-neon-pink">
      <h2 className="text-3xl font-extrabold text-neon-green mb-4">
        Welcome to Your Dashboard
      </h2>
      <p className="text-lg text-neon-green opacity-90 mb-6">
        Enter an amount and choose an action:
      </p>

      {/* Input Field */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
        className="w-full px-4 py-3 bg-gray-800 text-neon-green border border-neon-pink rounded-lg shadow-glow focus:outline-none focus:ring-2 focus:ring-neon-pink mb-6"
      />

      {/* Action Buttons */}
      <div className="flex space-x-6">
        <button
          onClick={handleGetCash}
          className="flex-1 px-6 py-4 bg-neon-green text-black font-bold rounded-lg shadow-glow hover:bg-neon-pink hover:text-black transition-transform transform hover:scale-105"
        >
          Get Cash
        </button>
        <button
          onClick={handleGetDigital}
          className="flex-1 px-6 py-4 bg-neon-pink text-black font-bold rounded-lg shadow-glow hover:bg-neon-green hover:text-black transition-transform transform hover:scale-105"
        >
          Get Digital
        </button>
      </div>
    </div>
  );
};
