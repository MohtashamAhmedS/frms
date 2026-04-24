import React from "react";

const Scroll = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
      <p className="flex items-center gap-2 text-[#A4A4A4]">
        scroll down
        <img src="/arrow-down.png" alt="" className="w-5" />
      </p>
    </div>
  );
};

export default Scroll;
