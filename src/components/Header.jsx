import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import logo from "../assets/header/logo.png";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleclick = () => {
    setIsOpenNav(true);
  };
  const closeModal = () => {
    setIsOpenNav(false);
  };
  return (
    <div className="pt-5 4xl:pt-10 max-w-[2400px] mx-auto">
      <div className="flex justify-center items-end gap-10 max-lg:gap-5 text-white text-lg uppercase baskervville 4xl:text-3xl max-sm:hidden cursor-pointer">
        <motion.h1
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 2,
            },
          }}
          whileHover={{
            scale: 1.3,
            y: -5,
            transition: {
              duration: 0.1,
            },
          }}
          viewport={{ once: true }}
        >
          Home
        </motion.h1>
        <motion.h1
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 2,
            },
          }}
          whileHover={{
            scale: 1.3,
            y: -5,
            transition: {
              duration: 0.1,
            },
          }}
          viewport={{ once: true }}
        >
          About
        </motion.h1>
        <motion.h1
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 2,
            },
          }}
          whileHover={{
            scale: 1.3,
            y: -5,
            transition: {
              duration: 0.1,
            },
          }}
          viewport={{ once: true }}
        >
          Upcoming
        </motion.h1>
        <motion.img
          initial={{
            y: -80,
            opacity: 0,
          }}
          transition={{
            duration: 2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={logo}
          alt="logo"
          className="px-16 max-lg:px-10 4xl:w-60"
        />
        <motion.h1
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 2,
            },
          }}
          whileHover={{
            scale: 1.3,
            y: -5,
            transition: {
              duration: 0.1,
            },
          }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h1>
        <motion.h1
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 2,
            },
          }}
          whileHover={{
            scale: 1.3,
            y: -5,
            transition: {
              duration: 0.1,
            },
          }}
          viewport={{ once: true }}
        >
          History
        </motion.h1>
        <motion.h1
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 2,
            },
          }}
          whileHover={{
            scale: 1.3,
            y: -5,
            transition: {
              duration: 0.1,
            },
          }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h1>
      </div>
      <div className="sm:hidden flex justify-end pr-5">
        <RiMenu3Fill className="w-7 h-7 text-white" onClick={handleclick} />
      </div>
      {isOpenNav && (
        <div className="absolute top-0 left-0 glass-effect-box-header w-full h-screen z-50 px-5 py-5 sm:hidden">
          <div className="flex justify-end cursor-pointer" onClick={closeModal}>
            <IoClose className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 text-lg font-semibold text-white cursor-pointer">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Upcoming</h1>
            <h1>Gallery</h1>
            <h1>History</h1>
            <h1>Contact</h1>
            <img
              src={logo}
              alt="logo"
              className="px-16 max-lg:px-10 4xl:w-60"
            />
          </div>
        </div>
      )}
    </div>
  );
}
