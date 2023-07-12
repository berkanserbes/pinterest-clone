"use client";
import React, { useState, useEffect } from "react";
import app from "@/firebaseConfig";
import { getFirestore } from "firebase/firestore";

const Profile = ({ params }) => {
  const [userInfo, setUserInfo] = useState();
  const db = getFirestore(app);
  console.log("params: ", params);
  return <div>Profile</div>;
};

export default Profile;
