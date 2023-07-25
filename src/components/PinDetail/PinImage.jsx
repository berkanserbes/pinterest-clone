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
        className="h-full object-contain w-full"
      />
    </div>
  );
};

export default PinImage;
