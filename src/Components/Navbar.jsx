import React from 'react'
import Logo from "../assets/logo1.png"
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Services",
      link: "/#services",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
];

export default function Navbar() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
            <div>
                <a href="#" className="font-bold text-2xl md:text-3xl flex">
                    <img src={Logo} alt="Logo" className=" w-14" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary pt-3">
                      Food<span className=' text-black dark:text-white'>Bank</span>
                    </span>
                </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden md:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-300"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}
