'use client'

import React, { useState } from 'react'

const Footer = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setPosition({ x, y })
  }

  return (
    <section
      onMouseMove={handleMove}
      className="relative bg-[#202020] h-[90vh] m-3 rounded-[24px] overflow-hidden mt-20 flex flex-col justify-between"
    >
      {/* Cursor glow */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />

      {/* Pattern layer */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat rounded-[24px] opacity-30"></div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex items-center justify-center flex-1">
        <div className="text-[48px] text-white font-syncopate font-[600] tracking-tighter text-center max-w-6xl px-6 leading-none">
          We help brands{' '}
          <span className="bg-[#FF6C6C] pr-2 rounded-xl">connect</span> with
          people through thoughtful design, solid development, and meaningful
          content.
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative z-10 px-6 pb-6">
        {/* Divider */}
        <div className="w-full h-[1px] bg-[#B7B7B7]/30 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* LEFT */}
          <div className="flex flex-col gap-2">
            <img src="/footerLogo.png" alt="logo" className="w-24" />
            <p className="text-white text-sm">Contact us</p>
          </div>

          {/* RIGHT TAGS */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6C6C] text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
              Web Development
            </span>
            <span className="bg-[#FF6C6C] text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
              Web Design
            </span>
            <span className="bg-[#FF6C6C] text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
              Content Management
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
