'use client'

import { useState } from 'react'

export default function Main() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const { innerWidth, innerHeight } = window

    const x = (e.clientX / innerWidth - 0.5) * 20 // small movement
    const y = (e.clientY / innerHeight - 0.5) * 20

    setPos({ x, y })
  }

  return (
    <section
      onMouseMove={handleMove}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* LEFT SHAPE */}
      <div
        className="absolute left-0 top-[10vh] z-0 w-[16vw] transition-transform duration-300"
        style={{ transform: `translate(${pos.x * -0.5}px, ${pos.y * -0.5}px)` }}
      >
        <img src="/shapeA.png" className="w-full" />
      </div>

      {/* TEXT */}
      <div className="relative z-10 text-center max-w-5xl px-10">
        {/* TOP LEFT IMAGE */}
        <img
          src="/hero-arrow1.png"
          className="absolute -top-20 left-0 transition-transform duration-300"
          style={{ transform: `translate(${pos.x * 0.8}px, ${pos.y * 0.8}px)` }}
        />

        <h1 className="text-5xl font-medium tracking-tight">
          At FRMS, where ideas action, we design and develop high-performing,
          inspiring websites that turn your vision into a powerful digital
          presence.
        </h1>

        {/* BOTTOM RIGHT IMAGE */}
        <img
          src="/hero-arrow2.png"
          className="absolute -bottom-2 right-2 transition-transform duration-300"
          style={{ transform: `translate(${pos.x * 1}px, ${pos.y * 1}px)` }}
        />
      </div>

      {/* RIGHT SHAPE */}
      <div
        className="absolute right-0 bottom-[5vh] z-0 w-[16vw] transition-transform duration-300"
        style={{ transform: `translate(${pos.x * -0.6}px, ${pos.y * -0.6}px)` }}
      >
        <img src="/shapeb.png" className="w-full" />
      </div>

      {/* STAR */}
      <div
        className="absolute right-[20vw] top-[16vh] z-0 transition-transform duration-300"
        style={{ transform: `translate(${pos.x * 1.2}px, ${pos.y * 1.2}px)` }}
      >
        <img src="/hero-star.png" className="w-full" />
      </div>
    </section>
  )
}

// export default function Main() {
//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
//       {/* LEFT SHAPE */}
//       <div className="absolute left-0 top-[10vh] z-0 w-[16vw]">
//         <img src="/shapeA.png" alt="shape" className="w-full" />
//       </div>

//       {/* TEXT */}
//       <div className="relative z-10 text-center max-w-5xl px-10">
//         {/* TOP RIGHT IMAGE */}
//         <img
//           src="/hero-arrow1.png"
//           alt=""
//           className="absolute -top-20 left-0 "
//         />

//         <h1 className="text-5xl font-medium tracking-tight">
//           At FRMS, where ideas action, we design and develop high-performing,
//           inspiring websites that turn your vision into a powerful digital
//           presence.
//         </h1>

//         {/* BOTTOM RIGHT IMAGE */}
//         <img
//           src="/hero-arrow2.png"
//           alt=""
//           className="absolute -bottom-2 right-2 "
//         />
//       </div>

//       {/* RIGHT SHAPE */}
//       <div className="absolute right-0 bottom-[5vh] z-0 w-[16vw]">
//         <img src="/shapeb.png" alt="shape" className="w-full" />
//       </div>

//       <div className="absolute right-[20vw] top-[16vh] z-0 ">
//         <img src="/hero-star.png" alt="shape" className="w-full" />
//       </div>
//     </section>
//   );
// }
