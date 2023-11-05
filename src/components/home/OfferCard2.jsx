import React from "react";
import { is_touch_enabled } from "../../utilties/helpersFunctions";
import { Link } from "react-router-dom";

export default function OfferCard2({ offer, to = "#" }) {
  const item = offer;
  const isTouchScreen = is_touch_enabled();

  return (
    <div className="w-full h-full shadow-md shadow-gray-300/80 relative overflow-hidden ">
      <Link to={to}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-top"
        />
        {/* right bottom  */}
        <div className="group absolute right-0 bottom-0 w-1/2 h-1/2">
          <div
            className={`absolute bottom-0 right-0 ${
              !isTouchScreen &&
              "transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0"
            }`}
          >
            <button
              className="w-12 h-12 p-2 pl-3 pt-3 bg-black/70 transition-colors duration-300 ease-in-out hover:bg-black/50 box-border border border-t-white border-l-white border-b-transparent border-r-transparent rounded-tl-full"
              onClick={(e) => e.preventDefault()}
            >
              <img
                src="https://i.ibb.co/MprmZ54/add-to-cart.png"
                alt="add to cart icon"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
          {!isTouchScreen && (
            <div className="absolute bottom-0 right-0 w-6 h-6 group-hover:hidden bg-myBlue-100/50 pl-1 pt-1 rounded-tl-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
                />
              </svg>
            </div>
          )}
        </div>
        {/* left bottom  */}
        <div className="group absolute left-0 bottom-0 w-1/2 h-1/2 ">
          <div
            className={`absolute bottom-0 left-0 ${
              !isTouchScreen &&
              "transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0"
            }`}
          >
            <button
              className="w-12 h-12 p-2 pr-3 pt-3 bg-black/70 transition-colors duration-300 ease-in-out hover:bg-black/50 box-border border border-t-white border-r-white border-b-transparent border-l-transparent rounded-tr-full"
              onClick={(e) => e.preventDefault()}
            >
              <img
                src="https://i.ibb.co/QNpntDK/favorite.png"
                alt="heart icon"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
          {!isTouchScreen && (
            <div className="absolute bottom-0 left-0 w-6 h-6 group-hover:hidden bg-myBlue-100/50 pr-1 pt-1 rounded-tr-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          )}
        </div>
        {/* right Top  */}
        <div className="group absolute right-0 top-0 w-1/2 h-1/2">
          <div
            className={`absolute top-0 right-0 ${
              !isTouchScreen &&
              "transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0"
            }`}
          >
            <button
              className="w-12 h-12 p-2 pl-3 pb-3 bg-black/70 transition-colors duration-300 ease-in-out hover:bg-black/50 box-border border border-b-white border-l-white border-t-transparent border-r-transparent rounded-bl-full"
              onClick={(e) => e.preventDefault()}
            >
              <img
                src="https://i.ibb.co/MprmZ54/add-to-cart.png"
                alt="add to cart icon"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
          {!isTouchScreen && (
            <div className="absolute top-0 right-0 w-6 h-6 bg-myBlue-100/50 rounded-bl-full pb-1 pl-1 group-hover:hidden text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
                />
              </svg>
            </div>
          )}
        </div>
        {/* left Top  */}
        <div className="group absolute left-0 top-0 w-1/2 h-1/2 ">
          <div
            className={`absolute top-0 left-0 ${
              !isTouchScreen &&
              "transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0"
            }`}
          >
            <button
              className="w-12 h-12 p-2 pr-3 pb-3 bg-black/70 transition-colors duration-300 ease-in-out hover:bg-black/50 box-border border border-b-white border-r-white border-t-transparent border-l-transparent rounded-br-full"
              onClick={(e) => e.preventDefault()}
            >
              <img
                src="https://i.ibb.co/QNpntDK/favorite.png"
                alt="heart icon"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
          {!isTouchScreen && (
            <div className="absolute top-0 left-0 w-6 h-6 bg-myBlue-100/50 rounded-br-full group-hover:hidden text-black pr-1 pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
