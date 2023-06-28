import React from "react";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import Link from "next/link";

const SideMenu = ({ showSideMenu, setShowSideMenu }) => {
  return (
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
              <span className="cursor-pointer text-center text-3xl">Home</span>
            </Link>
            <Link href="/products">
              <span className="cursor-pointer text-center text-3xl">
                Products
              </span>
            </Link>
            <Link href="/contact">
              <span className="cursor-pointer text-center text-3xl">
                Contact
              </span>
            </Link>
            <Link href="/faq">
              <span className="cursor-pointer text-center text-3xl">FAQ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
