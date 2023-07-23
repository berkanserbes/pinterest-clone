import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PinItem = ({ item }) => {
  const router = useRouter();

  return (
    <div className="text-center border border-gray-500">
      <div onClick={() => router.push(`/pin/${item.id}`)}>
        <Image
          src={item.image}
          alt={item.title}
          height={500}
          width={500}
          className="rounded-3xl cursor-pointer"
        />
      </div>
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
    </div>
  );
};

export default PinItem;
