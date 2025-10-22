"use client";

import { useState } from "react";
import ButtonsList from "./ButtonsList";

const list = ["About Me", "Experiences", "Recommended"];

const ProfileCard = () => {
  const [activeButton, setActiveButton] = useState<string>(list[0]);

  return (
    <div className="">
      <ButtonsList buttonsList={list} setActiveButton={setActiveButton} selected={activeButton} />
      ProfileCard
    </div>
  )
};

export default ProfileCard;
