import React from "react";
import Fade from "../utilties/Fade";
import MainSlider from "../components/home/MainSlider";
import useFetch from "../utilties/useFetch";
import CatergoriesSlider from "../components/home/CatergoriesSlider";
import OfferCard from "../components/home/OfferCard";
import { onlyLetters } from "../utilties/helpersFunctions";
import { Link } from "react-router-dom";
export default function Home() {
  const [trendingData, trendingLoading, trendingError] = useFetch(
    "http://localhost:3000/assets/api/treanding.json"
  );
  const [categoriesData, categoriesLoading, categoriesError] = useFetch(
    "http://localhost:3000/assets/api/categories.json"
  );
  const [offersData, offersLoading, offersError] = useFetch(
    "https://fakestoreapi.com/products"
  );
  console.log(offersData.length);
  trendingError !== null && console.error(trendingError);
  categoriesError !== null && console.error(categoriesError);
  offersError !== null && console.error(offersError);

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
                        <div className="w-[250px] h-[250px] shadow-md shadow-gray-300/80 relative overflow-hidden ">
                          <Link to={"/text"}>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover object-top"
                            />
                            <div className="group absolute right-0 top-0 w-1/2 h-full">
                              <div className="absolute bottom-0 right-0 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0">
                                <button
                                  className="w-12 h-12 p-2 pl-3 pt-3 bg-black/70 transition-colors duration-300 ease-in-out hover:bg-black/50 box-border border border-myBlue-300 rounded-tl-full"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <img
                                    src="https://i.ibb.co/MprmZ54/add-to-cart.png"
                                    alt="add to cart icon"
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="group absolute left-0 bottom-0 w-12 h-12 bg-myBlue-100 rounded-tr-full animate-pulse hover:animate-none">
                              <div className="absolute bottom-0 left-0  transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0">
                                <button
                                  className="w-12 h-12 p-2 pr-3 pt-3 bg-black/70 transition-colors duration-300 ease-in-out hover:bg-black/50 box-border border border-myBlue-300 rounded-tr-full"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <img
                                    src="https://i.ibb.co/QNpntDK/favorite.png"
                                    alt="heart icon"
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              </div>
                            </div>
                          </Link>
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
