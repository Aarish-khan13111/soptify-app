import React from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Body from "./Body";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Body />
    </div>
  );
};

export default Dashboard;
