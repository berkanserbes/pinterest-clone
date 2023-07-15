"use client";
import React, { useState } from "react";
import { GrUploadOption } from "react-icons/gr";
import Image from "next/image";

const UploadImage = ({ setFile }) => {
  const [selectedFile, setSelectedFile] = useState();

  return (
    <div className="h-[450px] bg-[#E9E9E9] rounded-lg cursor-pointer">
      {!selectedFile && (
        <div className="flex flex-col items-center m-5 border-dashed border-2 h-[90%] border-neutral-400 justify-center">
          <div className="flex flex-col items-center gap-3">
            <GrUploadOption size={25} />
            <h2>Click to upload</h2>
          </div>
        </div>
      )}
      {selectedFile && (
        <Image
          src={window.URL.createObjectURL(selectedFile)}
          alt="selected-image"
          width={500}
          height={800}
          className="object-contain h-[90%]"
        />
      )}
      <input
        type="file"
        className="hidden"
        onChange={(e) => {
          setSelectedFile(e.target.files[0]);
          setFile(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;
