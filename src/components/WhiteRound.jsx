import React from "react";
import Ellipse1 from "../assets/whiteBg/Ellipse 1.png";
import Ellipse2 from "../assets/whiteBg/Ellipse 2.png";
import Ellipse3 from "../assets/whiteBg/Ellipse 3.png";
import { motion } from "framer-motion";

export default function WhiteRound() {
  return (
    <motion.div
      animate={{ scale: [1, 1.02, 1] }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        repeat: Infinity,
        delay: 0.5,
      }}
      className="-z-5 0 relative"
    >
      <img
        src={Ellipse1}
        alt="Ellipse1"
        className="absolute w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src={Ellipse2}
        alt="Ellipse2"
        className="absolute w-11/12 h-11/12 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <img src={Ellipse3} alt="Ellipse3" className="w-full h-full" />
    </motion.div>
  );
}
