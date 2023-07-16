import React, { useState } from "react";
import { GrUploadOption } from "react-icons/gr";

const UploadImage = ({ setFile }) => {
  const [selectedFile, setSelectedFile] = useState();

  return (
    <div className="h-[450px] bg-[#E9E9E9] rounded-lg">
      {!selectedFile && (
        <div className="flex flex-col items-center m-5 border-dashed border-2 h-[90%] border-neutral-400 justify-center">
          <div className="flex flex-col items-center gap-3 relative">
            <GrUploadOption size={25} />
            <h2 className="cursor-pointer">Click to upload</h2>
            <input
              type="file"
              className="opacity-0 absolute bottom-0 cursor-pointer"
              accept="image/bmp,image/gif,image/jpeg,image/jpg,image/png,image/tiff,image/webp"
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
                setFile(e.target.files[0]);
              }}
            />
          </div>
        </div>
      )}
      {selectedFile && (
        <picture>
          <img
            src={window.URL.createObjectURL(selectedFile)}
            alt="selected-image"
            width={500}
            height={800}
            className="object-contain h-[90%] px-2"
          />
        </picture>
      )}
    </div>
  );
};

export default UploadImage;
