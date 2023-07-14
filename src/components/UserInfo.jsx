import React from "react";
import Image from "next/image";

const UserInfo = ({ userInfo }) => {
  return (
    <div className="text-center">
      <h1>{userInfo.email}</h1>
      <h1>{userInfo.userName}</h1>
      <h1>{userInfo.userImage}</h1>
    </div>
  );
};

export default UserInfo;
