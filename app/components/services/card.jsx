import React from 'react'

const Card = ({ heading, para, image, icon, bg, text }) => {
  return (
    <div className={`${bg} p-4 mt-8 rounded-2xl `}>
      <div className="flex flex-row justify-between items-center font-syncopate gap-12 border-b border-[#777777] pb-4">
        <h1
          className={`text-[36px] font-semibold tracking-tighter leading-none ${text}`}
        >
          {heading}
        </h1>

        <div>
          <img src={icon} alt="" />
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <p className="font-light mb-2">{para}</p>

        <img
          src={image}
          alt=""
          className="grayscale hover:grayscale-0 transition duration-300 min-w-[400px] "
        />
      </div>
    </div>
  )
}

export default Card
