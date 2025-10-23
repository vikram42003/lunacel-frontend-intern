"use client";

import { useState } from "react";
import ButtonsList from "./ButtonsList";
import Image from "next/image";

const list = ["About Me", "Experiences", "Recommended"];

const ProfileCard = () => {
  const [activeButton, setActiveButton] = useState<string>(list[0]);

  return (
    <div className="h-full flex flex-col">
      <ButtonsList buttonsList={list} setActiveButton={setActiveButton} selected={activeButton} />

      <p className="mt-8 max-h-full text-[0.99rem] text-text-gray overflow-ellipsis relative">
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
        <br />
        <br />I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany
        and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is
        usually blocked between 9-10 AM. This is a...

        {/* Didnt know if it was a scrollbar or an icon so i've put the icon here
            we can just create a custom scrollbar using tailwind-scrollbar package incase a scrollbar is needed */}
        <Image
          src="/rectangle_in_profile_widget_icon.svg"
          alt="Icon of a rectangle"
          height="16"
          width="16"
          className="absolute top-0 -right-12"
        />
      </p>
    </div>
  );
};

export default ProfileCard;
