import React from "react";
import Image from "next/image";

const navbar = () => {
  return (
    <div className="navbar   items-center">
      <Image
        className="absolute top-0 ml-4 mt-4"
        src="/logo.png"
        alt="Website logo"
        width={100}
        height={20}
        priority
      />
      <div className="nav-list flex items-center justify-center mt-7">
        <div className="nav-menu ">
          <ul className="flex gap-8 text-lg font-medium">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">work</a>
            </li>
            <li>
              <a href="">services</a>
            </li>
            <li>
              <a href="">testimonial</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
