import React from "react";
import PinItem from "./PinItem";

const PinList = ({ userPins }) => {
  console.log(userPins);
  return (
    <div className="flex flex-wrap space-x-2 space-y-4 sm:space-y-0">
      {userPins.map((item) => (
        <PinItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PinList;
