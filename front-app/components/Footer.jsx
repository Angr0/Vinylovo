import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { PiVinylRecord } from "react-icons/pi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary p-4 flex flex-col items-center gap-4">
      <div className="flex flex-col">
        <h3 className="text-4xl flex items-end text-tertiary">
          <PiVinylRecord /> <span>Vinylovo</span>
        </h3>
        <span className="text-center text-sm text-[#444]">
          Copyright &#169; {currentYear}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-around gap-8 w-full">
        <div className="flex flex-col gap-4">
          <span className="text-center sm:text-left">
            <span className="font-bold">E-mail:</span> emailaddress@gmail.com
          </span>
          <span className="text-center sm:text-left">
            <span className="font-bold">Address:</span> Duluth GA Georgia 30-097
          </span>
          <span className="text-center sm:text-left">
            <span className="font-bold">Telephone:</span> +48 123 456 789
          </span>
        </div>
        <div className="flex sm:flex-col lg:flex-row justify-around gap-4">
          <Link href="/">
            <span className="link">Home</span>
          </Link>
          <Link href="/products">
            <span className="link">Products</span>
          </Link>
          <Link href="/contact">
            <span className="link">Contact</span>
          </Link>
          <Link href="/faq">
            <span className="link">FAQ</span>
          </Link>
        </div>
        <div className="flex sm:flex-col lg:flex-row gap-4 text-4xl justify-around">
          <span>
            <BsFacebook />
          </span>
          <span>
            <BsInstagram />
          </span>
          <span>
            <BsTwitter />
          </span>
          <span>
            <BsYoutube />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
