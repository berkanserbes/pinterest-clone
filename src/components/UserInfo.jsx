import React from "react";
import Image from "next/image";

const UserInfo = ({ userInfo }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image
        src={userInfo.userImage}
        alt={`${userInfo.userName} profile photo`}
        width={100}
        height={100}
        className="rounded-full"
      />
      <h2 className="font-semibold text-2xl">{userInfo.userName}</h2>
      <h2 className="text-gray-400">{userInfo.email}</h2>
      <button className="bg-gray-200 p-3 rounded-full font-semibold">
        Share
      </button>
    </div>
  );
};

export default UserInfo;
