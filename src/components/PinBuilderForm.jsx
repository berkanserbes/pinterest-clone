"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "@/firebaseConfig";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import UploadImage from "./UploadImage";

const PinBuilderForm = () => {
  // useSession hook
  const { data: session } = useSession();
  // useState hooks
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  // router
  const router = useRouter();
  // firebase
  const db = getFirestore(app);
  const storage = getStorage(app);

  const postId = Date.now().toString();

  const uploadFile = () => {
    const storageRef = ref(storage, `pin/${file.name}`);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
      .then((res) => {
        getDownloadURL(storageRef).then(async (url) => {
          console.log(url);
          const postData = {
            title: title,
            description: description,
            link: link,
            image: url,
            userName: session.user.name,
            userImage: session.user.image,
            email: session.user.email,
            id: postId,
          };

          await setDoc(doc(db, "pins", postId), postData).then((res) => {
            console.log("Saved");
            setLoading(true);
            router.push(`/${session.user.email}`);
          });
        });
      });
  };

  return (
    <div className="bg-white p-16 rounded-xl">
      <div className="flex items-center justify-between">
        <BiDotsHorizontalRounded size={30} />
        <div className="flex justify-end">
          <button className="text-white bg-red-500 p-2 rounded-lg">Save</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <UploadImage setFile={setFile} />
      </div>
    </div>
  );
};

export default PinBuilderForm;
