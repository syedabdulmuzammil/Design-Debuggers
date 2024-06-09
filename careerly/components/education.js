"use client";
import Downarrow from "@/public/icons/downarrow";
import React, { useEffect, useState } from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";

const Education = () => {
  const [open, setOpen] = useState(false);
  const [set, putSet] = useState("Education Status");
  const [open1, setOpen1] = useState(false);
  const [set1, putSet1] = useState("Select Feild of study");
  useEffect(() => {
    console.log(open, "op");
  }, [set]);

  const [inputs, setInputs] = useState({
    fieldOfStudy: "",
    institutionName: "",
    gradYear: "",
    gpa: "",
    certifications: "",
    achievements: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const allFieldsFilled = Object.values(inputs).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(allFieldsFilled);
    console.log(isFormValid, "for");
  }, [inputs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className=" flex flex-col gap-12 pb-4 ">
      <div className=" w-full bg-[#191919] rounded-3xl flex flex-col pb-6 ">
        <div className=" flex flex-col ">
          <div className=" py-12  px-6 text-[#FAFBFD] font-space font-medium text-[26px]  ">
            Educational Details
          </div>
          <div className="w-full border-[1px] border-[#333333] "></div>
          <div className=" grid grid-cols-2 px-6 gap-x-24 gap-y-12 py-5 ">
            <div className="flex flex-col gap-3">
              <div className=" text-[15px] font-medium text-[#FAFBFD] font-overused  ">
                Education Level
              </div>
              <input
                placeholder="Enter your education level"
                onChange={handleInputChange}
                value={inputs.educationLevel}
                className=" input w-full py-3 pl-4 rounded-2xl bg-[#292929] border-[1px] border-[#333333]  "
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className=" text-[15px] font-medium text-[#FAFBFD] font-overused  ">
                Feild of study
              </div>
              <div
                className={` relative flex items-center justify-between w-full py-3 px-4 rounded-2xl bg-[#292929] border-[1px] border-[#333333] font-overused text-[#B3B3B3] text-[15px] cursor-pointer  `}
              >
                <div
                  className=" w-full flex items-center justify-between "
                  onClick={() => {
                    setOpen1(true);
                  }}
                >
                  <div> {set1}</div>
                  <div
                    className={` ${
                      open1 ? " rotate-180 " : ""
                    } transition-all duration-500 `}
                    onClick={() => {
                      setOpen1(true);
                    }}
                  >
                    <Downarrow />
                  </div>
                </div>
                <AnimatePresence>
                  {open1 && (
                    <motion.div
                      className={`absolute top-12 left-0 flex flex-col gap-3 py-4 px-4 rounded-2xl bg-[#292929] w-full  `}
                      onClick={() => {
                        setOpen(false);
                      }}
                      initial={{
                        y: -20,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: -20,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: easeInOut,
                      }}
                    >
                      <div
                        className=" cursor-pointer hover:bg-black rounded-xl w-fit p-2 "
                        onClick={() => {
                          setOpen1(false);
                          putSet1("Engineering");
                        }}
                      >
                        Engineering
                      </div>
                      <div
                        className=" cursor-pointer hover:bg-black rounded-xl w-fit p-2 "
                        onClick={() => {
                          setOpen1(false);
                          putSet1("Arts");
                        }}
                      >
                        Arts
                      </div>
                      <div
                        className=" cursor-pointer hover:bg-black rounded-xl w-fit p-2 "
                        onClick={() => {
                          setOpen1(false);
                          putSet1("Commerce");
                        }}
                      >
                        Commerce
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className=" text-[15px] font-medium text-[#FAFBFD] font-overused  ">
                Institution Name
              </div>
              <input
                placeholder="Enter your Name of Institution"
                className=" input w-full py-3 pl-4 rounded-2xl bg-[#292929] border-[1px] border-[#333333]  "
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className=" text-[15px] font-medium text-[#FAFBFD] font-overused  ">
                Grad Year
              </div>
              <input
                placeholder="Enter your graduation year"
                className=" input w-full py-3 pl-4 rounded-2xl bg-[#292929] border-[1px] border-[#333333]  "
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className=" text-[15px] font-medium text-[#FAFBFD] font-overused  ">
                Education Status
              </div>
              <div
                className={` relative flex items-center justify-between w-full py-3 px-4 rounded-2xl bg-[#292929] border-[1px] border-[#333333] font-overused text-[#B3B3B3] text-[15px] cursor-pointer  `}
              >
                <div
                  className=" w-full flex items-center justify-between "
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <div> {set}</div>
                  <div
                    className={` ${
                      open ? " rotate-180 " : ""
                    } transition-all duration-500 `}
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <Downarrow />
                  </div>
                </div>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      className={`absolute top-12 left-0 flex flex-col gap-3 py-4 px-4 rounded-2xl bg-[#292929] w-full  `}
                      onClick={() => {
                        setOpen(false);
                      }}
                      initial={{
                        y: -20,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: -20,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: easeInOut,
                      }}
                    >
                      <div
                        className=" cursor-pointer hover:bg-black rounded-xl w-fit p-2 "
                        onClick={() => {
                          setOpen(false);
                          putSet("Graduated");
                        }}
                      >
                        Graduated
                      </div>
                      <div
                        className=" cursor-pointer hover:bg-black rounded-xl w-fit p-2 "
                        onClick={() => {
                          setOpen(false);
                          putSet("Post-Graduate");
                        }}
                      >
                        Post-Graduate
                      </div>
                      <div
                        className=" cursor-pointer hover:bg-black rounded-xl w-fit p-2 "
                        onClick={() => {
                          setOpen(false);
                          putSet("Masters");
                        }}
                      >
                        Masters
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className=" text-[15px] font-medium text-[#FAFBFD] font-overused  ">
                GPA/Score
              </div>
              <input
                placeholder="Enter your grades"
                className=" input w-full py-3 pl-4 rounded-2xl bg-[#292929] border-[1px] border-[#333333]  "
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className=" text-[15px] font-medium text-[#FAFBFD] font-overused  ">
                Certifications
              </div>
              <input
                placeholder="Enter your certifications"
                className=" input w-full py-3 pl-4 rounded-2xl bg-[#292929] border-[1px] border-[#333333]  "
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className=" text-[15px] font-medium text-[#FAFBFD] font-overused  ">
                Achievements
              </div>
              <input
                placeholder="Enter your Achivements"
                className=" input w-full py-3 pl-4 rounded-2xl bg-[#292929] border-[1px] border-[#333333]  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-between h-[40px] py-6 rounded-3xl bg-[#333333] px-4 border-[1px] border-[#444444] ">
        <div className=" flex items-center  gap-2 ">
          <div className=" font-overused text-white text-[15px] pr-8  ">
            Progress
          </div>
          <div className=" h-[5px] w-[45px] rounded-2xl bg-[#8B66FE] "></div>
          <div className=" h-[5px] w-[45px] rounded-2xl bg-[#6D6D6D] "></div>
        </div>
        <div className=" flex  ">
          <div className=" text-[#FAFBFD] text-[16px] font-overused bg-[#8B66FE] h-full px-8 py-2 rounded-full cursor-pointer   ">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
