import React, { useState } from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function UserDashboard() {


  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col">
      <Navbar />
      <div className="mt-16">
      <Outlet />
      </div>
    </div>
  );
}
