import React from 'react'

const card = ({ icon, heading, category, testimonial }) => {
  return (
    <div className="flex flex-col  shadow-xl/20 rounded-[32px] pb-3 mb-1">
      <img src={icon} alt="" />
      <h1 className="text-[28px] text-[#FF6C6C] mb-1  font-semibold tracking-tight pl-4">
        {' '}
        {heading}
      </h1>
      <p className="pl-4 mb-2">
        <span className="font-semibold ">Category:</span> {category}
      </p>
      <p className="pl-4 font-semibold ">Testimonial</p>
      <p className="pl-4 mb-2">{testimonial}</p>
    </div>
  )
}

export default card
