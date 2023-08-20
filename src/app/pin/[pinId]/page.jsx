"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  collection,
  where,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import app from "@/firebaseConfig";
import { HiArrowSmallLeft } from "react-icons/hi2";
import PinImage from "@/components/PinDetail/PinImage";
import PinInfo from "@/components/PinDetail/PinInfo";

const Page = ({ params }) => {
  console.log("params", params);
  const router = useRouter();
  const db = getFirestore(app);
  const [pinDetail, setPinDetail] = useState([]);

  useEffect(() => {
    getPinDetail();
  }, []);

  const getPinDetail = async () => {
    const q = query(collection(db, "pins"), where("id", "==", params.pinId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setPinDetail(doc.data());
    });
  };

  return (
    <div>
      <HiArrowSmallLeft
        size={35}
        className="cursor-pointer font-bold"
        onClick={() => router.back()}
      />
      <div className="flex justify-center items-center w-3/4 mx-auto">
        <div className="flex rounded-2xl items-center justify-center border border-slate-500 w-max h-[80vh]">
          <div className="w-1/2">
            <PinImage pinDetail={pinDetail} />
          </div>
          <div className="w-1/2">
            <PinInfo pinDetail={pinDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
