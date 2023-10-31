import React from "react";
import { Tooltip } from "react-tooltip";
import Fade from "../utilties/Fade";
import MainSlider from "../components/home/MainSlider";
import useFetch from "../utilties/useFetch";
// import Carousel from "../components/shaered/Carousel";
// import { categoriesObj } from "../dataObjects/navbar";
import CatergoriesSlider from "../components/home/CatergoriesSlider";
import { onlyLetters } from "../utilties/helpersFunctions";
import { Link } from "react-router-dom";
export default function Home() {
  const [trendingData, trendingLoading, trendingError] = useFetch(
    "https://fakestoreapi.com/products/category/women's clothing?limit=6"
  );
  const [categoriesData, categoriesLoading, categoriesError] = useFetch(
    "http://localhost:3000/assets/api/categories.json"
  );
  const [offersData, offersLoading, offersError] = useFetch(
    "https://fakestoreapi.com/products"
  );
  trendingError !== null && console.error(trendingError);
  categoriesError !== null && console.error(categoriesError);
  offersError !== null && console.error(offersError);
  console.log(offersData[0]);
  const item = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  return (
    <>
      {/* Tranding  */}
      <div className="w-full h-full relative ">
        <Fade direction={"left"}>
          <p className="absolute top-2 left-2 bg-black/30 text-white text-xl sm:text-2xl md:text-3xl font-bold z-10 px-4 py-2 rounded-md addColon capitalize">
            Tranding
          </p>
        </Fade>
        {/* slider  */}
        <Fade direction={"top"}>
          <div className="w-full h-[500px] mx-auto  overflow-hidden box-border shadow-lg shadow-myBlue-200/20">
            {<MainSlider data={trendingData} skeleton={trendingLoading} />}
          </div>
        </Fade>
        {/* categorys  */}
        <div className="mt-4">
          <Fade direction={"left"} threshold={1}>
            <p className="bg-white/30 text-white text-xl sm:text-2xl md:text-3xl font-bold z-10 px-4 py-2 rounded-md addColon capitalize w-fit ml-2">
              categorys
            </p>
          </Fade>
          <Fade direction={"right"}>
            <div className="mt-8 bg-myBlue-200 w-full h-[150px] overflow-hidden box-border">
              <CatergoriesSlider
                categories={categoriesData}
                skeleton={categoriesLoading}
              />
            </div>
          </Fade>
        </div>
        {/* offers  */}
        <div className="mt-4">
          <Fade direction={"left"} threshold={1}>
            <p className="bg-white/30 text-white text-xl sm:text-2xl md:text-3xl font-bold z-10 px-4 py-2 rounded-md addColon capitalize w-fit ml-2">
              offers
            </p>
          </Fade>
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 justify-items-center">
            {/* card  */}
            {!offersLoading &&
              offersData.map((item, i) => {
                if (i >= 1 && i <= 10) {
                  return (
                    <div
                      key={item.id.toString() + onlyLetters(item.title)}
                      className="w-[300px] h-[450px]  md:w-[225px] md:h-[400px] lg:w-[300px] lg:h-[450px] bg-myGold-100 rounded-b-sm relative group shadow-2xl shadow-myBlue-100/30"
                    >
                      <div className="w-full h-[80%] rounded-t-sm">
                        <Link>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-top rounded-t-sm"
                            loading="lazy"
                          />
                        </Link>
                      </div>
                      <div
                        className="w-full h-[20%] relative pt-4 shadow-inner shadow-myBlue-100/30 transition-colors duration-300 ease-in-out group-hover:bg-myGold-200"
                        data-tooltip-id={
                          item.id.toString() + onlyLetters(item.title)
                        }
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
                        <p className="text-center ">
                          <Link>{item.category}</Link>
                        </p>
                      </div>
                      <div className="absolute top-2 left-2 flex">
                        <p className="rounded-full bg-purple-700 px-2 py-1 text-sm font-bold group-hover:animate-pulse">
                          Offer
                        </p>
                      </div>
                      <div className="absolute bottom-[20%] left-0 w-full flex justify-between px-2 pb-2">
                        <p className="text-lg text-center text-white w-auto px-2 h-8 bg-slate-950/80 rounded-full group-hover:animate-pulse">
                          {item.price} $
                          <span className="px-2 h-full rounded-full addDollar line-through">
                            {item.price + item.price / 2}
                          </span>
                        </p>
                        <p className="text-lg text-center text-white w-auto px-2 h-8 bg-slate-950/80 rounded-full addGoldStar">
                          {item.rating.rate}
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
}
