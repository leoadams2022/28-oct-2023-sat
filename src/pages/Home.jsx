import React from "react";
import Fade from "../utilties/Fade";
import MainSlider from "../components/home/MainSlider";
import useFetch from "../utilties/useFetch";
import CatergoriesSlider from "../components/home/CatergoriesSlider";
import OfferCard from "../components/home/OfferCard";
import { onlyLetters, is_touch_enabled } from "../utilties/helpersFunctions";
import { Link } from "react-router-dom";
import OfferCard2 from "../components/home/OfferCard2";
export default function Home() {
  const [trendingData, trendingLoading, trendingError] = useFetch(
    "https://leoadams2022.github.io/BizFunding.github.io/api//treanding.json"
  );
  const [categoriesData, categoriesLoading, categoriesError] = useFetch(
    "https://leoadams2022.github.io/BizFunding.github.io/api/categories.json"
  );
  const [offersData, offersLoading, offersError] = useFetch(
    "https://leoadams2022.github.io/BizFunding.github.io/api/allProducts.json"
  );
  trendingError !== null && console.error(trendingError);
  categoriesError !== null && console.error(categoriesError);
  offersError !== null && console.error(offersError);
  const isTouchScreen = is_touch_enabled();
  return (
    <>
      <div className="w-full h-full relative ">
        {/* Tranding  */}
        <>
          <Fade direction={"left"}>
            <p className="absolute top-2 left-2 bg-black/30 text-white text-xl sm:text-2xl md:text-3xl font-bold z-10 px-4 py-2 rounded-md addColon capitalize">
              Tranding
            </p>
          </Fade>
          {/* Tranding slider  */}
          <Fade direction={"top"}>
            <div className="w-full h-[500px] mx-auto  overflow-hidden box-border shadow-lg shadow-myBlue-200/20">
              {<MainSlider data={trendingData} skeleton={trendingLoading} />}
            </div>
          </Fade>
        </>
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
            <p className="bg-white/30 text-white text-xl sm:text-2xl md:text-3xl font-bold z-10 px-4 py-2 rounded-md addColon capitalize w-fit ml-2 mb-4">
              offers
            </p>
          </Fade>
          {/* cards container */}
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 justify-items-center">
            {/* cards  */}
            {!offersLoading ? (
              offersData.map((item, i) => {
                if (i >= 1 && i <= 10) {
                  return (
                    <OfferCard
                      offer={item}
                      key={item.id.toString() + onlyLetters(item.title)}
                      skeleton={offersLoading}
                      discount={50}
                    />
                  );
                }
                return false;
              })
            ) : (
              <OfferCard skeleton={offersLoading} />
            )}
          </div>
          {/* Advertisement Div */}
          <div className="w-full py-16 my-4 bg-[url('https://i.ibb.co/nLZ6hG6/slide-1.jpg')] bg-cover bg-center bg-fixed flexCenter">
            <Fade discount={"right"}>
              <div className="w-full py-10 px-4 bg-myBlue-300/60 flex flex-col md:flex-row justify-evenly items-center gap-2">
                {trendingData.map((item, i) => {
                  if (i >= 1 && i <= 3) {
                    const spann =
                      i < 3 ? (
                        <span className="text-4xl font-bold">+</span>
                      ) : (
                        ""
                      );
                    return (
                      <>
                        <div className="w-[350px] h-[350px]">
                          <OfferCard2 offer={item} to="leo" />
                        </div>
                        {spann}
                      </>
                    );
                  }
                  return false;
                })}
              </div>
            </Fade>
          </div>
          {/* cards container */}
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 justify-items-center">
            {/* cards  */}
            {!offersLoading ? (
              offersData.map((item, i) => {
                if (i >= 11 && i <= 100) {
                  return (
                    <OfferCard
                      offer={item}
                      key={item.id.toString() + onlyLetters(item.title)}
                      skeleton={offersLoading}
                      discount={50}
                    />
                  );
                }
                return false;
              })
            ) : (
              <OfferCard skeleton={offersLoading} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
