import React from 'react'
import Card from './card'

const service = () => {
  return (
    <div
      id="services"
      className="relative -top-2 bg-[#202020] text-white m-2 p-6 pr-10 pl-10 rounded-[32px]"
    >
      <div className=" flex justify-between items-center border-b-1 border-white pb-2">
        <h1 className="text-white text-[42px] font-medium">Our Services</h1>

        <p className="hidden md:block text-[#B7B7B7] text-[16px] w-[250px]">
          Bring your idea to life through your creative expertise
        </p>
      </div>

      <div className="flex flex-row gap-4 md:flex-nowrap flex-wrap">
        <Card
          heading={
            <>
              Web <br /> Design
            </>
          }
          para="We design modern, responsive websites. Built to grow your brand and convert users."
          image="/card1-img.png"
          icon="/service-link.png"
          bg="bg-[#434343]"
          text="text-[#FF6C6C]"
        />
        <Card
          heading={
            <>
              Web <br /> Dev
            </>
          }
          para="We design modern, responsive websites. Built to grow your brand and convert users."
          image="/card2-img.png"
          icon="/service-link.png"
          bg="bg-[#FF6C6C]"
          text="text-[#434343]"
        />
        <Card
          heading={
            <>
              Content <br /> Creation
            </>
          }
          para="I design modern, responsive websites. Built to grow your brand and convert users."
          image="/card3-img.png"
          icon="/service-link.png"
          bg="bg-[#434343]"
          text="text-[#FF6C6C]"
        />
      </div>
    </div>
  )
}

export default service
