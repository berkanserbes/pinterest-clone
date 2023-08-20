"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "@/firebaseConfig";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import UploadImage from "./UploadImage";
import PinBuilderUserInfo from "./PinBuilderUserInfo";

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
            id: postId,
            title,
            description,
            link,
            image: url,
            userName: session.user.name,
            userImage: session.user.image,
            email: session.user.email,
          };

          await setDoc(doc(db, "pins", postId), postData).then((res) => {
            console.log("Saved");
            setLoading(true);
            router.push(`/${session.user.email}`);
          });
        });
      });
  };

  const savePin = () => {
    uploadFile();
  };

  return (
    <div className="bg-white p-1 sm:p-16 rounded-xl">
      <div className="flex items-center justify-between">
        <BiDotsHorizontalRounded size={30} />
        <div className="flex justify-end">
          <button
            className="text-white bg-red-500 p-2 rounded-lg"
            onClick={() => savePin()}
          >
            Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <UploadImage setFile={setFile} />
        <div className="col-span-2">
          <div className="w-full p-3">
            <input
              type="text"
              placeholder="Add your title"
              maxLength={100}
              className="outline-none font-bold w-full text-4xl border-b-2 border-gray-300 focus:border-blue-400 placeholder-gray-500 pb-2"
              onChange={(e) => setTitle(e.target.value)}
            />
            <h2 className="text-gray-400 text-xs">
              The first 40 characters are what usually show up in feeds
            </h2>
            <PinBuilderUserInfo user={session?.user} />
            <input
              type="text"
              placeholder="Tell everyone what your Pin is about"
              maxLength={500}
              className="pt-9 outline-none w-full border-b-2 border-gray-300 focus:border-blue-400 focus:placeholder:opacity-50 placeholder-gray-500 sm:indent-2 sm:pb-2"
              onChange={(e) => setDescription(e.target.value)}
            />
            <h2 className="text-gray-400 text-xs">
              People will usually see the first 50 characters when they click on
              your Pin
            </h2>
            <div className="mt-24">
              <input
                type="text"
                placeholder="Add a destination link"
                className="pt-8 outline-none w-full text-lg border-b-2 border-gray-300 focus:border-blue-400 placeholder-gray-500 pb-2"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinBuilderForm;
