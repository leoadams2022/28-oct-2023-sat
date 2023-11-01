import React from "react";
import Fade from "../../utilties/Fade";
import { onlyLetters } from "../../utilties/helpersFunctions";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function OfferCard({ offer, skeleton, discount }) {
  const item = offer;
  return !skeleton ? (
    <Fade direction={"bottom"}>
      <div className="w-[300px] h-[450px]  md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[450px] rounded-b-sm relative group shadow-2xl shadow-myBlue-100/30">
        {/* image div  */}
        <div className="w-full h-[75%] rounded-t-sm">
          <Link>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-top rounded-t-sm "
              loading="lazy"
            />
          </Link>
        </div>
        {/* title & category & addToCart */}
        <div className="w-full h-[25%] relative pt-4 shadow-inner shadow-myBlue-100/30 transition-colors duration-300 ease-in-out bg-myGold-100 group-hover:bg-myGold-200">
          <div
            data-tooltip-id={item.id.toString() + onlyLetters(item.title)}
            data-tooltip-content={item.description}
            data-tooltip-wrapper="span"
          >
            <Tooltip
              id={item.id.toString() + onlyLetters(item.title)}
              style={{
                width: "80%",
                zIndex: "1",
              }}
            />
            <p className="text-2xl md:text-xl text-center line-clamp-1">
              <Link> {item.title}</Link>
            </p>
            <p className="text-center line-clamp-1">
              <Link>{item.category}</Link>
            </p>
          </div>
          <button className="absolute bottom-1 right-1 w-10 h-10 p-1 capitalize font-bold transition-colors duration-300 ease-in-out hover:bg-myBlue-300  rounded-md">
            <img
              src="https://i.ibb.co/MprmZ54/add-to-cart.png"
              alt="add to cart icon"
              className="w-full h-full object-cover"
            />
          </button>
          <button className="absolute bottom-1 left-1 w-10 h-10 p-1 capitalize font-bold transition-colors duration-300 ease-in-out hover:bg-myBlue-300  rounded-md">
            <img
              src="https://i.ibb.co/QNpntDK/favorite.png"
              alt="heart icon"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
        {/* discount div  */}
        <div className="absolute top-2 left-2 flex">
          <p className="rounded-full bg-purple-700 px-2 py-1 text-sm font-bold group-hover:animate-pulse">
            {discount}% Discount
          </p>
        </div>
        {/* price & reating div  */}
        <div className="absolute bottom-[25%] left-0 w-full flex justify-between px-2 pb-2">
          <p className="flexCenter w-fit h-8 px-2 text-white lg:text-lg bg-slate-950/80 rounded-full addDollar">
            <span className="text-gray-300 mr-1 rounded-full line-through">
              {item.price}
            </span>
            {item.price * (discount / 100)}
          </p>
          <p className="flexCenter lg:text-lg text-white h-8 px-2 bg-slate-950/80 rounded-full addGoldStar">
            {item.rating.rate}
          </p>
        </div>
      </div>
    </Fade>
  ) : (
    <Fade direction={"bottom"}>
      <div className="w-[300px] h-[450px]  md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[450px] rounded-b-sm relative group shadow-2xl shadow-myBlue-100/30">
        {/* image div  */}
        <div className="w-full h-[75%] rounded-t-sm bg-gray-400 animate-pulse"></div>
        {/* title & category & addToCart */}
        <div className="w-full h-[25%] relative pt-4 shadow-inner shadow-myBlue-100/30  bg-myGold-100 flex flex-col justify-center items-center">
          <p className="h-8 w-28 mb-1 animate-pulse bg-gray-300 "></p>
          <p className="h-6 w-10 animate-pulse bg-gray-300 "></p>
          <button
            className="absolute bottom-1 right-1 w-10 h-10 p-1 capitalize font-bold transition-colors duration-300 ease-in-out bg-myBlue-300  rounded-md animate-pulse"
            disabled
          >
            <img
              src="https://i.ibb.co/MprmZ54/add-to-cart.png"
              alt="add to cart icon"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            className="absolute bottom-1 left-1 w-10 h-10 p-1 capitalize font-bold transition-colors duration-300 ease-in-out bg-myBlue-300  rounded-md animate-pulse"
            disabled
          >
            <img
              src="https://i.ibb.co/QNpntDK/favorite.png"
              alt="heart icon"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
        {/* discount div  */}
        <div className="absolute top-2 left-2 flex">
          <p className="w-12 h-6 rounded-full bg-purple-700 px-2 py-1 text-sm font-bold animate-pulse"></p>
        </div>
        {/* price & reating div  */}
        <div className="absolute bottom-[25%] left-0 w-full flex justify-between px-2 pb-2">
          <p className="w-14 h-8 flexCenter px-2 text-white lg:text-lg bg-slate-950/80 rounded-full addDollar animate-pulse">
            <span className="w-4 text-gray-300 mr-1 rounded-full line-through"></span>
          </p>
          <p className="w-10 animate-pulse flexCenter lg:text-lg text-white h-8 px-2 bg-slate-950/80 rounded-full addGoldStar"></p>
        </div>
      </div>
    </Fade>
  );
}
