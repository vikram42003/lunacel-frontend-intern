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
    <div className="flex  shrink-0 text-sm bg-button-bg text-inavtive-button rounded-2xl border-6 border-button-bg">
      {buttonsList.map((buttonText, idx) => (
        <motion.button
          key={buttonText + idx}
          onClick={() => setActiveButton(buttonText)}
          className={`grow rounded-2xl relative py-2.5 bg-wipe-gradient ${buttonText === selected ? "" : "hover:cursor-pointer"}`}
          initial={{ backgroundPosition: "100% 0%" }}
          whileHover={{ backgroundPosition: "0% 0%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <span className={`relative z-30 ${buttonText === selected ? "text-white" : ""}`}>{buttonText}</span>

          {buttonText === selected && (
            <motion.div
              className="absolute inset-0 bg-active-button-bg z-10 h-full w-full rounded-2xl shadow-[10px_10px_50px_10px_rgba(0,0,0,1)]"
              layoutId="ButtonList"
              transition={{ type: "tween", duration: 0.3 }}
            ></motion.div>
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default ButtonsList;
