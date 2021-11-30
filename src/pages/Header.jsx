import React, { useState, useEffect } from "react";
import { shopIcon } from "../resources/icons";
import Navigation from "./Navigation";
import logo from "../resources/images/logo.svg";
import avatar from "../resources/images/image-avatar.png";

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className="w-full filter z-100">
      <div className="bg-white">
        <div
          className={`m-0 grid grid-cols-2 transition-spacing duration-500 ${
            offset === 0 ? "pt-0" : "pt-0"
          }`}
        >
          <div className="px-40  w-screen">
            <div className=" border-b flex justify-between pt-8">
              <div className="flex">
                <div>
                  <img className="mr-20 cursor-pointer" src={logo} alt="logo" />
                </div>
                <div>
                  <Navigation />
                </div>
              </div>
              <div className="">
                <div className="flex items-center">
                  <span className="hover:text-primary-dark cursor-pointer transition-all">
                    {shopIcon}
                  </span>
                  <img
                    className="h-8 ml-8 border-2 hover:border-primary-dark rounded-2xl cursor-pointer transition-all"
                    src={avatar}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
