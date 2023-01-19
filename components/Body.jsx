import { unstable_getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import useSpotify from "../hooks/useSpotify";
import Poster from "./Poster";
import Search from "./Search";

const Body = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  // const { accessToken } = session.user;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    if (!search) return setSearchResults([]);

    let cancel = false;

    if (spotifyApi.getAccessToken()) {
      spotifyApi.searchTracks(search).then((res) => {
        if (cancel) return;
        setSearchResults(
          res.body.tracks.items.map((track) => {
            return {
              id: track.id,
              artist: track.artists.name,
              title: track.name,
              uri: track.uri,
              albumUrl: track.album.images[0].url,
            };
          })
        );
      });
    }
    return () => (cancel = true);
  }, [session, spotifyApi, search]);

  // //Searching...
  // useEffect(() => {
  //   if (!search) return setSearchResults([]);
  //   if (!accessToken) return;
  //   spotifyApi.searchTracks(search).then((res) => {
  //     setSearchResults(res);
  //   });
  // }, [search, accessToken]);

  // console.log(searchResults);

  return (
    <div className="flex flex-grow bg-black">
      <header className="flex top-5">
        <Search search={search} setSearch={setSearch} />
        <div
          className="flex items-center ml-24 bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer
        rounded-full p-1 pr-2 absolute right-8 text-white ">
          <img
            className="rounded-full w-8 h-8"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <FaChevronDown className="h-5 w-5" />
        </div>
      </header>
      <div className="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
        {searchResults.length === 0
          ? newReleases
              .slice(0, 4)
              .map((track) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))
          : searchResults
              .slice(0, 4)
              .map((track) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))}
      </div>
    </div>
  );
};

export default Body;
