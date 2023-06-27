import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { PiVinylRecord } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div className="bg-secondary p-4 flex justify-between">
      <div className="flex lg:w-[40%] gap-4">
        <h1 className="text-4xl flex items-center text-tertiary">
          <PiVinylRecord />
        </h1>
        <div className="flex gap-4">
          <div className="hidden lg:block lg:flex lg:items-center lg:gap-4">
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
        <div className="hidden sm:block sm:flex sm:gap-4">
          <button className="card-button text-2xl text-tertiary">
            <AiOutlineUser />
          </button>
          <button className="card-button text-2xl text-tertiary">
            <AiOutlineHeart />
          </button>
          <button className="card-button text-2xl text-tertiary">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
      <span
        className="flex items-center text-3xl lg:hidden cursor-pointer text-tertiary"
        onClick={() => {
          setShowSideMenu((oldValue) => !oldValue);
        }}
      >
        <RxHamburgerMenu />
      </span>
      <div
        className={`${
          showSideMenu ? "block" : "hidden"
        } absolute top-0 right-0 bg-tertiary text-secondary h-full w-[70%] sm:w-[40%] p-4`}
      >
        <div className="flex flex-col gap-8">
          <div className="flex justify-between sm:justify-end">
            <div className="flex gap-4 sm:hidden">
              <button className="card-button text-2xl text-tertiary">
                <AiOutlineUser />
              </button>
              <button className="card-button text-2xl text-tertiary">
                <AiOutlineHeart />
              </button>
              <button className="card-button text-2xl text-tertiary">
                <AiOutlineShoppingCart />
              </button>
            </div>
            <span
              className="text-3xl text-secondary cursor-pointer"
              onClick={() => {
                setShowSideMenu((oldValue) => !oldValue);
              }}
            >
              <AiOutlineClose />
            </span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-4">
              <Link href="/">
                <span className="cursor-pointer text-center text-3xl">
                  Home
                </span>
              </Link>
              <Link href="/">
                <span className="cursor-pointer text-center text-3xl">
                  Products
                </span>
              </Link>
              <Link href="/">
                <span className="cursor-pointer text-center text-3xl">
                  Contact
                </span>
              </Link>
              <Link href="/">
                <span className="cursor-pointer text-center text-3xl">FAQ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
