import { getcashguys,getdigitalguys } from "./api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
export const Content=()=>{
 const navigator= useNavigate()
 const dispatch= useDispatch()
 const [amount,setAmount]= useState(0)
  const handleGetCash = () => {
    if (!amount) {
      alert("Please enter an amount!");
      return;
    }
    console.log("Get Cash clicked with amount:", amount); // Example API call or action
    getcashguys(navigator,dispatch,amount)
  };

  const handleGetDigital = () => {
    if (!amount) {
      alert("Please enter an amount!");
      return;
    }
    console.log("Get Digital clicked with amount:", amount);
    getdigitalguys(navigator,dispatch,amount) // Example API call or action
  };

    return(
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
          <h2 className="text-2xl text-white font-bold mb-4">Welcome to Your Dashboard</h2>
          <p className="text-gray-400 mb-6">Enter an amount and choose an action:</p>

          {/* Input Field */}
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} // Update amount state
            placeholder="Enter Amount"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={()=>handleGetCash()}
              className="flex-1 px-6 py-4 bg-green-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Get Cash
            </button>
            <button
              onClick={()=>handleGetDigital()}
              className="flex-1 px-6 py-4 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Get Digital
            </button>
          </div>
          </div>   
)}