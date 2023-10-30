import React, { useEffect, useRef, useState } from "react";

export default function Search({ open, setOpen }) {
  const inputRef = useRef(null);
  const [searchStr, setSearchStr] = useState("");
  useEffect(() => {
    if (open === true) {
      setSearchStr("");
      inputRef.current.focus();
    }
  }, [open]);
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 transition-transform duration-500 ease-in-out ${
        open === true ? "translate-y-0" : "-translate-y-full"
      }`}
      onClick={setOpen}
    >
      <div
        className="w-full h-32 bg-myBlue-300 flex justify-center items-center gap-3 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          type="text"
          name="searchInput"
          className="px-2 py-1 focus:outline-myBlue-100 text-slate-900"
          placeholder="Search..."
          value={searchStr}
          onInput={(e) => setSearchStr(e.target.value)}
        />
        <button
          className="flex justify-center items-center w-8 h-8"
          onClick={setOpen}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              stroke="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
