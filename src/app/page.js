"use client";
import React, { useEffect, useState } from "react";
import { getFirestore, query, collection, getDocs } from "firebase/firestore";
import app from "../firebaseConfig";
import PinItem from "@/components/Pins/PinItem";

export default function Home() {
  const db = getFirestore(app);
  const [allPins, setAllPins] = useState([]);

  useEffect(() => {
    const getAllPins = async () => {
      const q = query(collection(db, "pins"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setAllPins((prev) => [...prev, doc.data()]);
      });
    };

    getAllPins();
  }, []);

  return (
    <div className="p-3 flex flex-wrap justify-center lg:justify-evenly  gap-4 sm:gap-2">
      {allPins?.map((item) => (
        <PinItem key={item.id} item={item} />
      ))}
    </div>
  );
}
