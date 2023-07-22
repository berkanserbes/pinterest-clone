"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { doc, getDocs, getFirestore } from "firebase/firestore";
import app from "@/firebaseConfig";

const Page = ({ params }) => {
  const router = useRouter();
  const db = getFirestore(app);
  const [pinDetail, setPinDetail] = useState([]);

  useEffect(() => {
    getPinDetail();
  }, []);

  const getPinDetail = async () => {
    const docRef = doc(db, "pins", params.pinId);
    const docSnap = await getDocs(docRef);
    if (!docSnap.exists()) {
      console.log("No such document");
    }
    setPinDetail(docSnap.data());
  };

  return <div>Page</div>;
};

export default Page;
