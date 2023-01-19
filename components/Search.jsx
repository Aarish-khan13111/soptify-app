import React from "react";
import { MdOutlineShortText } from "react-icons/md";

const Search = ({ search, setSearch }) => {
  return (
    <div className="max-w-[1150px] ml-24  bg-black rounded-full border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[#1A1A1A] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#FAFAFA] text-xs pl-1"
        placeholder="Search..."
      />

      <div className="flex items-center divide-dotted divide-x-2 divide-[#333333] ml-auto">
        <div className="flex items-center space-x-1.5 text-[#CECECE] pl-4">
          <MdOutlineShortText className="text-2xl animate-pulse" />
          <span className="font-medium text-sm">Filters</span>
        </div>
      </div>
    </div>
  );
};

export default Search;