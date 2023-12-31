"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { HiBell, HiChat } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import app from "../firebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const Header = () => {
  const { data: session } = useSession();
  const db = getFirestore(app);
  const router = useRouter();

  const saveUserInfo = async () => {
    if (session?.user) {
      await setDoc(doc(db, "user", session.user.email), {
        // session.user.email equals Document id
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image,
      });
    }
  };

  const createPinHandler = () =>
    session?.user ? router.push("/pin-builder") : signIn();

  useEffect(() => {
    saveUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <header className="flex justify-center items-center p-2 gap-1 sm:gap-2 max-w-screen">
      <Image
        src="/pinterest-logo.png"
        alt="pinterest-logo"
        width={60}
        height={60}
        className="hover:bg-gray-300 rounded-full cursor-pointer p-2"
      />
      <button
        className="bg-black rounded-full text-white py-2 px-4"
        onClick={() => router.push("/")}
      >
        Home
      </button>
      <button
        className="bg-black rounded-full text-white py-2 px-4"
        onClick={() => createPinHandler()}
      >
        Create
      </button>
      <div className="hidden sm:flex flex-1 items-center border p-1 rounded-lg">
        <BiSearch size={25} className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none flex-1"
        />
      </div>
      <HiBell size={30} className="cursor-pointer text-gray-500" />
      <HiChat size={30} className="cursor-pointer text-gray-500" />
      {session?.user ? (
        <Image
          src={session.user.image}
          alt="profile-logo"
          width={50}
          height={50}
          className="hover:bg-gray-300 rounded-full cursor-pointer p-2"
          onClick={() => router.push(`/${session.user.email}`)}
        />
      ) : (
        <button
          className="bg-black rounded-full text-white py-2 px-4"
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
