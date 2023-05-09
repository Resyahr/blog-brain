import React from "react";

function SideDecor({ data }) {
  return (
    <div className="hidden h-screen md:flex justify-center items-center bg-primary basis-1/3">
      <img
        className="p-6 lg:p-0 lg:max-w-[70%]"
        src={data?.signPageImage["image"]}
        alt={data?.signPageImage["alt"]}
      />
    </div>
  );
}

export default SideDecor;