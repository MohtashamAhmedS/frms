'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md">
      {/* LOGO */}
      <Image
        src="/logo.png"
        alt="Website logo"
        width={100}
        height={20}
        priority
      />

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">Testimonial</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      {/* HAMBURGER */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden relative w-8 h-6 flex flex-col justify-between"
      >
        <span
          className={`h-[2px] w-full bg-black transition-all duration-300 ${
            open ? 'rotate-45 translate-y-[10px]' : ''
          }`}
        ></span>
        <span
          className={`h-[2px] w-full bg-black transition-all duration-300 ${
            open ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`h-[2px] w-full bg-black transition-all duration-300 ${
            open ? '-rotate-45 -translate-y-[10px]' : ''
          }`}
        ></span>
      </button>

      {/* MOBILE MENU */}
      <div
        className={`absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-300 md:hidden ${
          open
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-lg font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
