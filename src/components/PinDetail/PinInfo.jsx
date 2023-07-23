import React from "react";
import UserInfo from "../UserInfo";

const PinInfo = ({ pinDetail }) => {
  const user = {
    userName: pinDetail.userName,
    userEmail: pinDetail.email,
    userImage: pinDetail.userImage,
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="font-bold text-2xl">{pinDetail.title}</h2>
      <h2 className="">{pinDetail.description}</h2>
      <UserInfo userInfo={user} />
      {pinDetail?.link && (
        <button
          className="p-2 bg-[#e9e9e9] px-5 text-[23px]
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
