"use client";
import React, { useState, useEffect } from "react";
import app from "@/firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import UserInfo from "@/components/UserInfo";

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
      {userInfo && (
        <div>
          <UserInfo userInfo={userInfo} />
        </div>
      )}
    </div>
  );
};

export default Profile;
