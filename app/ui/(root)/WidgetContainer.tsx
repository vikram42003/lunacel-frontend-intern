import clsx from "clsx";
import Image from "next/image";
import React from "react";

const WidgetContainer = ({ children, className }: Readonly<{ children: React.ReactNode; className: string }>) => {
  return (
    <div
      className={clsx(className, "flex rounded-2xl overflow-hidden bg-widget-container-bg offset-box-shadow px-3 py-4")}
    >
      <div className="flex-1/12 relative">
        <Image src="/question_mark_icon.svg" alt="Icom of a question mark icon" height="24" width="24" />
        <Image
          src="/grabbable_handle_icon.svg"
          alt="Icon of a handle you can grab to move the component"
          height="24"
          width="24"
          className="absolute top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
      <div className="flex-10/12">{children}</div>
      <div className="flex-1/12"></div>
    </div>
  );
};

export default WidgetContainer;
