import React, { useEffect, useState } from "react";
import Carousel from "../components/shaered/Carousel";
// import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import Fade from "../utilties/Fade";
// const slides = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 15.99,
//     description:
//       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     rating: {
//       rate: 2.1,
//       count: 430,
//     },
//   },
// ];
export default function Home() {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          // for (const key in json[0]) console.log(key, " - ");
          console.log(json);
          setData(json);
          setloading(false);
        });
    }, 2000);
  }, []);
  return (
    <>
      <p> Trending</p>
      <div className="w-full h-full">
        {/* slider  */}
        <Fade direction={"left"}>
          <div className="w-[200px] h-[200px] bg-white ">hi there</div>
          <div className="w-[300px] h-[500px]  overflow-hidden box-border border border-red-500">
            {data && (
              <Carousel controls={2}>
                {data.map((item, i) => (
                  <div
                    key={item.id + item.title}
                    className="flex-full h-full relative  overflow-hidden "
                  >
                    <div className="w-full h-[80%] ">
                      <Link>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-t-md"
                        />
                      </Link>
                    </div>
                    <div className="w-full h-[15%] bg-myGold-200 rounded-b-md p-4 shadow-2xl">
                      <p className="text-xl text-center text-myBlue-300 font-bold line-clamp-1">
                        <Link>{item.title}</Link>
                      </p>
                      <p className="block text-sm text-center">
                        <Link>{item.category}</Link>
                      </p>
                    </div>
                    <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-full px-2 flex justify-between text-red-800">
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
            )}
          </div>
          <div className="w-[300px] h-[500px]  overflow-hidden box-border">
            {data && (
              <Carousel controls={2}>
                {data.map((item, i) => (
                  <div
                    key={item.id + item.title}
                    className="flex-full h-full relative  overflow-hidden "
                  >
                    <div className="w-full h-[80%] ">
                      <Link>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-t-md"
                        />
                      </Link>
                    </div>
                    <div className="w-full h-[15%] bg-myGold-200 rounded-b-md p-4 shadow-2xl">
                      <p className="text-xl text-center text-myBlue-300 font-bold line-clamp-1">
                        <Link>{item.title}</Link>
                      </p>
                      <p className="block text-sm text-center">
                        <Link>{item.category}</Link>
                      </p>
                    </div>
                    <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-full px-2 flex justify-between text-red-800">
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
            )}
          </div>
        </Fade>
      </div>
    </>
  );
}
