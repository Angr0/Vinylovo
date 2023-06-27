import React from "react";
import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { PiVinylRecord } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="bg-secondary-button p-4 flex justify-between">
      <div className="flex lg:w-[40%] gap-4">
        <h1 className="text-4xl flex items-center">
          <PiVinylRecord />
        </h1>
        <div className="flex gap-2">
          <div className="hidden lg:block lg:flex lg:items-center lg:gap-3">
            <Link href="/">
              <span className="card-button">Home</span>
            </Link>
            <Link href="/">
              <span className="card-button">Products</span>
            </Link>
            <Link href="/">
              <span className="card-button">Contact</span>
            </Link>
            <Link href="/">
              <span className="card-button">FAQ</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          className="rounded-md p-2 shadow"
          placeholder="Search..."
        />
        <div className="hidden sm:block sm:flex sm:gap-3">
          <button className="card-button text-2xl">
            <AiOutlineUser />
          </button>
          <button className="card-button text-2xl">
            <AiOutlineHeart />
          </button>
          <button className="card-button text-2xl">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
      <span className="flex items-center text-3xl lg:hidden">
        <RxHamburgerMenu />
      </span>
    </div>
  );
};

export default Header;
