import React from "react";
import UserInfo from "../UserInfo";

const PinInfo = ({ pinDetail }) => {
  const user = {
    userName: pinDetail.userName,
    userEmail: pinDetail.email,
    userImage: pinDetail.userImage,
  };
  return (
    <div className="flex flex-col items-center justify-around gap-3 h-[80vh]">
      <div className="w-full mx-auto text-center overflow-clip">
        <h2 className="font-bold text-3xl text-ellipsis overflow-hidden">
          {pinDetail.title}
        </h2>
        <h3 className="px-2 overflow-hidden">{pinDetail.description}</h3>
      </div>
      <UserInfo userInfo={user} />
      {pinDetail?.link && (
        <button
          className="px-2 py-1 sm:px-4 sm:py-2 bg-[#e9e9e9] text-[23px]
        mt-10 rounded-full hover:scale-105 transition-all"
          onClick={() => window.open(pinDetail.link)}
        >
          Open Url
        </button>
      )}
    </div>
  );
};

export default PinInfo;
