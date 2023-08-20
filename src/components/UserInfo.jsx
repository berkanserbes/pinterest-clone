import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserInfo = ({ userInfo }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const logoutHandler = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center gap-5 text-center sm:text-left text-ellipsis">
      <Image
        src={userInfo.userImage}
        alt={`${userInfo.userName} profile photo`}
        width={100}
        height={100}
        className="rounded-full"
      />
      <h2 className="font-semibold text-2xl ">{userInfo.userName}</h2>
      <h2 className="text-gray-400">{userInfo.email}</h2>
      <div className="flex gap-4">
        <button className="bg-gray-200 p-3 rounded-full font-semibold">
          Share
        </button>
        {session?.user.email === userInfo.email && (
          <button
            className={`bg-gray-200 p-3 rounded-full font-semibold ${
              !session?.user && "hidden"
            }`}
            onClick={logoutHandler}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
