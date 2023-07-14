"use client";
import React, { useState, useEffect } from "react";
import app from "@/firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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

  return (
    <div>
      <h1>{params.userId.replace("%40", "@")}</h1>
      <h2>{userInfo?.userName}</h2>
      <h2>{userInfo?.userImage}</h2>
    </div>
  );
};

export default Profile;
