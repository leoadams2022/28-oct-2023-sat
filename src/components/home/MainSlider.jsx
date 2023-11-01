import React from "react";
import Carousel from "../shaered/Carousel";
import { UrlFormate } from "../../utilties/helpersFunctions";
import { Link } from "react-router-dom";

export default function MainSlider({ data, skeleton }) {
  return !skeleton ? (
    <Carousel controls={2}>
      {data.map((item, i) => (
        <div
          key={item.id + item.title}
          className="flex-full h-full relative overflow-hidden"
        >
          <div className="w-full h-[80%] ">
            <Link to={`/${UrlFormate(item.id)}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="w-full h-[20%] bg-myblue-300 p-4 shadow-inner  shadow-myBlue-200/20">
            <p className="text-xl text-center text-myBlue-100 font-bold line-clamp-1">
              <Link to={`/${UrlFormate(item.id)}`}>{item.title}</Link>
            </p>
            <p className="block text-sm text-center">
              <Link to={`/${UrlFormate(item.category)}`}>{item.category}</Link>
            </p>
          </div>
          <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-full px-2 flex justify-between">
            <p className="text-lg text-center text-white w-auto px-2 h-8 bg-slate-950/80 rounded-full addDollar">
              {item.price}
            </p>
            <p className="text-lg text-center text-white w-auto px-2 h-8 bg-slate-950/80 rounded-full addGoldStar">
              {item.rating.rate}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  ) : (
    <div className="flex-full h-full relative  overflow-hidden ">
      <div className="w-full h-[80%] bg-gray-400 animate-pulse"></div>
      <div className="w-full h-[20%]bg-myblue-300 p-4 shadow-inner  shadow-myBlue-200">
        <p className="mx-auto  w-1/2 h-5 bg-gray-500 animate-pulse"></p>
        <p className="mt-2 mx-auto  w-1/4 h-5 bg-gray-500 animate-pulse"></p>
      </div>
      <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-full px-2 flex justify-between">
        <p className="w-auto px-2 h-8 bg-slate-950/80 rounded-full animate-pulse addDollar"></p>
        <p className="w-auto px-2 h-8 bg-slate-950/80 rounded-full animate-pulse addGoldStar"></p>
      </div>
    </div>
  );
}
