import React from "react";
import Image from "next/image";

const PinImage = ({ pinDetail }) => {
  return (
    <div className="h-[80vh]">
      <Image
        src={pinDetail.image}
        alt={pinDetail.title}
        width={500}
        height={500}
        className="h-full object-cover w-full rounded-l-2xl py-[0.77px]"
      />
    </div>
  );
};

export default PinImage;
