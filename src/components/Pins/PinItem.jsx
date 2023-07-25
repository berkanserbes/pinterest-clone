import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PinItem = ({ item }) => {
  const router = useRouter();

  return (
    <div className="h-fit text-center rounded-2xl group">
      <div onClick={() => router.push(`/pin/${item.id}`)}>
        <Image
          src={item.image}
          alt={item.title}
          height={500}
          width={500}
          className="rounded-3xl cursor-pointer object-cover"
        />
      </div>
      <h2 className="font-bold hidden group-hover:block">{item.title}</h2>
      <h3 className="hidden group-hover:block">{item.description}</h3>
    </div>
  );
};

export default PinItem;
