import React from "react";
import Image from "next/image";

const PinItem = ({ item }) => {
  return (
    <div className="">
      <Image src={item.image} alt={item.title} height={500} width={500} />
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
    </div>
  );
};

export default PinItem;
