import React, { useState } from "react";
import data from "./TemplateData.json";
import { StarIcon } from "@heroicons/react/24/solid";

const SearchItem = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="nike-container">
      <div className="my-5 grid items-center blur-effect-theme">
        <div className="flex justify-between items-center my-0 mx-auto">
          <div className="w-full h-auto">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-base text-black uppercase font-medium text-gradient filter drop-shadow">
              Most Searched Products
            </h1>
            <p className="text-black text-2xl filter drop-shadow md:text-sm font-normal">
              Best Quality with Assurence
            </p>
          </div>
          <div>
            <input
              className="w-full p-2.5 outline-none"
              type="text"
              placeholder="Search here..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
          />
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded gap-5">
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return true; // Include all items when searchTerm is empty
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .map((val) => {
              return (
                <div className="w-full bg-gradient-to-b my-6 from-white to-black shadow-xl rounded-theme  transition-all duration-700 ease-in-out hover:scale-105" key={val.id}>
                  <img className="h-full w-full object-cover" src={val.image} alt="" />
                  <div className="flex items-center justify-between p-3 mt-0">
                    <h3 className="mt-0 text-2xl font-bold ">{val.title}</h3>
                    <div className="flex items-center gap-1">
                      <p className="text-white text-md font-medium bg-black px-1 rounded blur-effect-theme ">${val.price}</p>
                      <StarIcon className="icon-style text-black w-5 h-5 md:w-4 md:h-4" />
                      <h1 className="md:text-sm text-normal text-slate-900">
                        {val.rating}
                      </h1>
                    </div>
                  </div>  
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
