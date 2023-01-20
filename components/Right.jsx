import React from "react";
import Dropdown from "./Dropdown";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
// import RecentlyPlayed from "./RecentlyPlayed";

const Right = ({ chooseTrack }) => {
  const { data: session } = useSession();
  //   const { accessToken } = session;
  //   const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  return (
    <section>
      <div className="flex space-x-2 items-center justify-between">
        <div className="flex items-center space-x-4 border-2 text-white border-[#262626] rounded-full h-12 py-3 px-4">
          <h2>{session?.user.name}</h2>
        </div>
        {/* Profile */}
        <Dropdown />
      </div>
    </section>
  );
};

export default Right;
