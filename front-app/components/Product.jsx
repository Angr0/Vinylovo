import React from "react";
import Link from "next/link";
import { FaRegFaceSadCry } from "react-icons/fa6";
import { BiHappyAlt } from "react-icons/bi";

const Product = ({ name, price, rating, formatter }) => {
  const ratingBarWidth = (rating / 5) * 100 + "%";
  const ratingBarColor = () => {
    if (rating / 5 < 0.33) return "#ef0909";
    if (rating / 5 < 0.66) return "#eeee05";
    if (rating / 5 <= 1) return "#0de00d";
  };

  return (
    <div className="product flex flex-col items-center gap-2">
      <h3 className="font-bold text-xl">{name}</h3>
      <div className="bg-accent w-32 h-32 rounded-full"></div>
      <span>Price: {formatter.format(price)}</span>
      <div className="flex items-center gap-2">
        <FaRegFaceSadCry />
        <div className="rounded-md border-tertiary border-2 w-32 h-6">
          <div
            className={`bg-primary h-full`}
            style={{
              width: `${ratingBarWidth}`,
              backgroundColor: ratingBarColor(),
            }}
          ></div>
        </div>
        <BiHappyAlt />
      </div>
      <button className="bg-primary rounded-md p-2 hover:shadow-md hover:scale-105 transition-all duration-300 ">
        <Link href={`/${name}`}>Check it out!</Link>
      </button>
    </div>
  );
};

export default Product;
