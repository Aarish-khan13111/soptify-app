import React from "react";
import { useRecoilState } from "recoil";
import { playingTrackState } from "../atoms/playerAtom";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [palyingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };
  return (
    <div className="flex min-h-screen min-w-max ">
      <Sidebar />
      <Body chooseTrack={chooseTrack} />
      <Right chooseTrack={chooseTrack} />
    </div>
  );
};

export default Dashboard;
