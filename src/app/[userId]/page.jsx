/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import app from "@/firebaseConfig";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import UserInfo from "@/components/UserInfo";
import PinList from "@/components/Pins/PinList";

const Profile = ({ params }) => {
  const [userInfo, setUserInfo] = useState();
  const db = getFirestore(app);

  useEffect(() => {
    if (params) getUserInfo(params.userId.replace("%40", "@"));
  }, [params]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserInfo(docSnap.data());
    } else {
      alert("No such document!");
    }
  };

  useEffect(() => {
    if (userInfo) getUserPins();
  }, [userInfo]);

  const getUserPins = async () => {
    const q = query(
      collection(db, "pins"),
      where("email", "==", userInfo.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <div>
      {userInfo && (
        <div>
          <UserInfo userInfo={userInfo} />
          <PinList />
        </div>
      )}
    </div>
  );
};

export default Profile;
