import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Carousel({
  children: slides,
  autoSlideDuration = 5000,
  autoSlide = true,
  controls = null,
  slidesLength = slides.length,
}) {
  const [curr, setCurr] = useState(0);
  const autoSlideIntervaleRef = useRef();
  let slidesLengthArr = [];
  for (let i = 0; i < slidesLength; i++) {
    slidesLengthArr.push(i);
  }

  const n = () => {
    if (slidesLength > 0) {
      if (autoSlide) clearInterval(autoSlideIntervaleRef.current);
      setCurr((pre) => (pre === slidesLength - 1 ? 0 : ++pre));
      if (autoSlide)
        autoSlideIntervaleRef.current = setInterval(n, autoSlideDuration);
    }
  };
  const p = () => {
    if (slidesLength > 0) {
      if (autoSlide) clearInterval(autoSlideIntervaleRef.current);
      setCurr((pre) => (pre === 0 ? slidesLength - 1 : --pre));
      if (autoSlide)
        autoSlideIntervaleRef.current = setInterval(n, autoSlideDuration);
    }
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      n();
    },
    onSwipedRight: () => {
      p();
    },
  });
  useEffect(() => {
    if (autoSlide) {
      autoSlideIntervaleRef.current = setInterval(n, autoSlideDuration);
      return () => clearInterval(autoSlideIntervaleRef.current);
    }
  });
  return (
    <div className="relative w-full h-full">
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
        {...swipeHandlers}
      >
        {slides}
      </div>
      {controls === 1 && (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 flex w-full justify-between px-2">
            <button
              onClick={p}
              className="w-10 h-10 rounded-full bg-gray-400/80 flex justify-center items-center hover:bg-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={n}
              className="w-10 h-10 rounded-full bg-gray-400/80 flex justify-center items-center hover:bg-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full flex justify-center gap-2 ">
            {slidesLengthArr.map((_, i) => (
              <button
                key={Math.random()}
                className={`inline-block w-2 h-2 rounded-full transition duration-500 ease-in-out ${
                  curr === i ? "bg-gray-100" : "bg-gray-800"
                }`}
                onClick={() => setCurr(i)}
              ></button>
            ))}
          </div>
        </>
      )}
      {controls === 2 && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-auto flex justify-between gap-2 bg-transparent">
          <button
            onClick={p}
            className="w-6 h-6 rounded-full flex justify-center items-center hover:bg-gray-500/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div>
            {curr + 1}/{slidesLength}
          </div>
          <button
            onClick={n}
            className="w-6 h-6 rounded-full flex justify-center items-center hover:bg-gray-500/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
