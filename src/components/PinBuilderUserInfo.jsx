import React from "react";
import Image from "next/image";

const PinBuilderUserInfo = ({ user }) => {
  console.log(user);
  return (
    <div className="pt-12 pb-2 flex text-ellipsis overflow-x-scroll sm:overflow-x-auto h-fit">
      <Image
        src={user?.image}
        alt="user image"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-col ps-3">
        <h2 className="font-bold">{user?.name}</h2>
        <h2>{user?.email}</h2>
      </div>
    </div>
  );
};

export default PinBuilderUserInfo;
