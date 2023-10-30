import React, { useState } from "react";
import { storePngLink } from "../../dataObjects/navbar";

export default function LoginSginUp({ open, setOpen }) {
  const [Page, setPage] = useState("login");
  const gotoPage = (pagename) => {
    setOpen((pre) => !pre);
    setTimeout(() => {
      setPage(pagename);
      setOpen((pre) => !pre);
    }, 500);
  };
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 transition-transform duration-500 ease-in-out flex justify-center items-center ${
        open === true ? "translate-y-0" : "translate-y-full"
      }`}
      onClick={setOpen}
    >
      <div
        className="bg-myGold-200 flex justify-center items-center  shadow-xl rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {Page === "login" && <Login page={Page} setPage={gotoPage} />}
        {Page === "sginup" && <Sginup page={Page} setPage={gotoPage} />}
        {Page === "profile" && <Profile page={Page} setPage={gotoPage} />}
      </div>
    </div>
  );
}
export const Login = ({ page, setPage }) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [RememberMe, setRememberMe] = useState(true);
  return (
    <>
      <form className="max-w-md flex flex-col justify-evenly p-4 gap-4 text-myBlue-300">
        <h1 className="text-myBlue-200 text-4xl capitalize text-stroke">
          Log into your account
        </h1>
        <div>
          <label
            htmlFor="username"
            className="block mb-1 capitalize addColon text-lg"
          >
            user name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="px-2 py-1 focus:outline-myBlue-100 text-slate-900 rounded-sm"
            placeholder="user name"
            value={UserName}
            onInput={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-1 capitalize addColon text-lg"
          >
            password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="px-2 py-1 focus:outline-myBlue-100 text-slate-900 rounded-sm"
            placeholder="password"
            value={Password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rememberMe" className="text-sm mr-2">
            keep me loged in
          </label>
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            className="focus:outline-myBlue-100 "
            checked={RememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
        </div>
        <button className="myBtn">log in</button>
        <p className="text-sm">
          dont have an account{" "}
          <button
            className="text-white italic font-bold underline"
            onClick={(e) => {
              e.preventDefault();
              setPage("sginup");
            }}
          >
            sginup
          </button>{" "}
          here
        </p>
      </form>
    </>
  );
};
export const Sginup = ({ page, setPage }) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [Address, setAddress] = useState("");
  return (
    <div className="grid md:grid-cols-2 max-w-2xl">
      <form className="max-w-md flex flex-col justify-evenly p-4 gap-4 text-myBlue-300">
        <h1 className="text-myBlue-200 text-4xl capitalize text-stroke">
          create a new Account
        </h1>
        <div className="flex gap-2">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 capitalize addColon text-lg"
            >
              user name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="px-2 py-1 focus:outline-myBlue-100 text-slate-900 rounded-sm w-full"
              placeholder="user name"
              value={UserName}
              onInput={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 capitalize addColon text-lg"
            >
              password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="px-2 py-1 focus:outline-myBlue-100 text-slate-900 rounded-sm w-full"
              placeholder="password"
              value={Password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="address"
            className="block mb-1 capitalize addColon text-lg"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="px-2 py-1 focus:outline-myBlue-100 text-slate-900 rounded-sm w-full"
            placeholder="Address"
            value={Address}
            onInput={(e) => setAddress(e.target.checked)}
          />
        </div>
        <div className="flex gap-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 capitalize addColon text-lg"
            >
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-2 py-1 focus:outline-myBlue-100 text-slate-900 rounded-sm w-full"
              placeholder="Email"
              value={Email}
              onInput={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="phonenumber"
              className="block mb-1 capitalize addColon text-lg"
            >
              phone number
            </label>
            <input
              type="text"
              name="phonenumber"
              id="phonenumber"
              className="px-2 py-1 focus:outline-myBlue-100 text-slate-900 rounded-sm w-full"
              placeholder="Phone number"
              value={Phonenumber}
              onInput={(e) =>
                setPhonenumber(
                  e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1")
                )
              }
            />
          </div>
        </div>
        <button className="myBtn">Sgin Up</button>
        <p className="text-sm ">
          have an account ?{" "}
          <button
            className="text-white italic font-bold underline"
            onClick={(e) => {
              e.preventDefault();
              setPage("login");
            }}
          >
            Log in
          </button>
          {"  "}
          here
        </p>
      </form>
      <div className="hidden md:block border-l border-black">
        <img
          src={storePngLink}
          alt="logo"
          className="w-full h-full rounded-r-md "
        />
      </div>
    </div>
  );
};
export const Profile = ({ page, setPage }) => {
  return <div>profile</div>;
};
