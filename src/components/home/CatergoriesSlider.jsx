import React from "react";
import Carousel from "../shaered/Carousel";
import { Link } from "react-router-dom";
import { UrlFormate } from "../../utilties/helpersFunctions";

export default function CatergoriesSlider({ categories, skeleton }) {
  return !skeleton ? (
    <Carousel controls={1} slidesLength={2} autoSlide={false}>
      {categories.map((cat, i) => (
        <div
          className="flex-1/2 h-full flex justify-center items-center"
          key={cat + i.toString()}
        >
          <div className="box-border shadow-2xl p-2 rounded-sm bg-myBlue-300/20 w-1/2 h-full">
            <div className="w-20 h-auto mx-auto">
              <Link to={`/category/${UrlFormate(cat.title)}`}>
                <img
                  src={cat.iconLink}
                  alt={cat.title}
                  className="W-full h-full object-cover"
                />
              </Link>
            </div>
            <p className="text-center text-xl md:text-2xl capitalize line-clamp-2">
              <Link to={`/category/${UrlFormate(cat.title)}`}>
                {" "}
                {cat.title}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  ) : (
    <div className="relative w-full h-full flex">
      <div className="flex-1/2 h-full flex justify-center items-center animate-pulse">
        <div className="box-border shadow-2xl p-2 rounded-sm bg-myBlue-300/20 w-1/2 h-full">
          <div className="w-20 h-20 mx-auto bg-gray-400 animate-pulse"></div>
          <p className="text-center text-xl md:text-2xl capitalize line-clamp-2 w-2/3 h-8 bg-slate-500 animate-pulse mx-auto mt-2"></p>
        </div>
      </div>
      <div className="flex-1/2 h-full flex justify-center items-center animate-pulse">
        <div className="box-border shadow-2xl p-2 rounded-sm bg-myBlue-300/20 w-1/2 h-full">
          <div className="w-20 h-20 mx-auto bg-gray-400 animate-pulse"></div>
          <p className="text-center text-xl md:text-2xl capitalize line-clamp-2 w-2/3 h-8 bg-slate-500 animate-pulse mx-auto mt-2"></p>
        </div>
      </div>
    </div>
  );
}
