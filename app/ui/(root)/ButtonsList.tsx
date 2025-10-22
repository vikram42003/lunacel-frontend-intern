import clsx from "clsx";
import { motion } from "motion/react";

const ButtonsList = ({
  buttonsList,
  setActiveButton,
  selected,
}: {
  buttonsList: string[];
  setActiveButton: (button: string) => void;
  selected: string;
}) => {
  return (
    <div className="flex">
      {buttonsList.map((buttonText, idx) => (
        <button
          key={buttonText + idx}
          className="grow rounded-lg relative"
          onClick={() => setActiveButton(buttonText)}
        >
          <span className="relative z-30">{buttonText}</span>
          
          {buttonText === selected && (
            <motion.div
              className="absolute inset-0 bg-blue-300 z-10 h-full w-full rounded-lg"
              layoutId="ButtonList"
              transition={{ type: "tween", duration: 0.3 }}
            ></motion.div>
          )}
        </button>
      ))}
    </div>
  );
};

export default ButtonsList;
