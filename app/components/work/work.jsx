import React from 'react'
import Card from './card'

const work = () => {
  return (
    <div id="work">
      <div className="ml-4 mt-20 mb-4 flex flex-col justify-center items-center">
        <p className="text-[14px] text-[#FF6C6C] mb-1">Our Recent Work</p>
        <h1 className="text-[24px] max-w-[80%] tracking-tight leading-tight">
          We design and develop clean, responsive websites that align with your
          brand and business goals, creating a strong, modern digital presence
          that performs.
        </h1>
      </div>
      <div className="flex flex-row gap-6 flex-wrap md:flex-nowrap items-center justify-center ">
        <Card
          icon="/work01.png"
          heading="Fazal-e-insaaniyat"
          category="Social Media Management, Web development"
          testimonial="Working with have been a great experience for us."
        />
        <Card
          icon="/work02.png"
          heading="Sufiyana Threads"
          category="Social Media Management, Web development"
          testimonial="Working with have been a great experience for us."
        />
        <Card
          icon="/work01.png"
          heading="Fazal-e-insaaniyat"
          category="Social Media Management, Web development"
          testimonial="Working with have been a great experience for us."
        />
      </div>
    </div>
  )
}

export default work
