"use client";
import Link from "next/link";
import React, { useState } from "react";

const Assessment = () => {
  const [activeTab1, setActiveTab1] = useState(-1);
  const [index1, setIndex1] = useState(0);
  const [test, setTest] = useState(false);
  const changeQuestion = () => {
    if (index1 == 9) {
      setTest(true);
    } else {
      setIndex1(index1 + 1);
      setActiveTab1(-1);
    }
  };

  const prevQuestion = () => {
    if (index1 !== 0) {
      setIndex1(index1 - 1);
    }
  };

  const questions = [
    {
      question: "What is the purpose of the `let` keyword in JavaScript?",
      options: [
        "To declare a block-scoped variable",
        "To declare a global variable",
        "To create a constant variable",
        "To declare a function",
      ],
      answer: "To declare a block-scoped variable",
    },
    {
      question:
        "Which of the following methods is used to add an element to the end of an array in JavaScript?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()",
    },
    {
      question: "What does the `this` keyword refer to in JavaScript?",
      options: [
        "The global object",
        "The current object",
        "The previous object",
        "The next object",
      ],
      answer: "The current object",
    },
    {
      question:
        "Which of the following is not a primitive data type in JavaScript?",
      options: ["String", "Number", "Object", "Boolean"],
      answer: "Object",
    },
    {
      question: "How do you write a comment in JavaScript?",
      options: [
        "# This is a comment",
        "<!-- This is a comment -->",
        "// This is a comment",
        "** This is a comment **",
      ],
      answer: "// This is a comment",
    },
    {
      question:
        "What will the following code output? console.log(typeof null);",
      options: ["null", "object", "undefined", "number"],
      answer: "object",
    },
    {
      question:
        "Which method is used to remove the last element from an array and return that element?",
      options: ["pop()", "push()", "shift()", "unshift()"],
      answer: "pop()",
    },
    {
      question: "How can you create an object in JavaScript?",
      options: [
        "let obj = [];",
        "let obj = {};",
        "let obj = new Array();",
        "let obj = new Object[];",
      ],
      answer: "let obj = {};",
    },
    {
      question:
        "Which of the following functions is used to parse a string to an integer in JavaScript?",
      options: ["parseInt()", "parseFloat()", "Number()", "String()"],
      answer: "parseInt()",
    },
    {
      question:
        "What is the output of the following code? console.log(2 + '2');",
      options: ["4", "'22'", "NaN", "undefined"],
      answer: "'22'",
    },
  ];
  return (
    <div className=" w-full px-4 ">
      <div className="w-full bg-[#191919] rounded-3xl flex flex-col pb-6">
        <div className=" flex flex-col ">
          <div className=" py-12  px-6 text-[#FAFBFD] font-space font-medium text-[26px]  ">
            Assessment
          </div>
          <div className="w-full border-[1px] border-[#333333] "></div>
          <div className=" flex flex-col px-6 pt-8 ">
            <div className=" text-space text-white font-medium text-[26px] ">
              JAVASCRIPT
            </div>
            <div className=" font-overused text-[16px] text-white font-medium  ">
              React JS:Assessment
            </div>
          </div>
          <div className=" flex flex-col ">
            {questions.map((item, index) => (
              <div
                className={` flex-col px-6 ${
                  index == index1 ? "flex" : "hidden"
                } `}
              >
                <div className=" flex flex-col gap-12 py-12 ">
                  <div className=" font-overused text-[15px] text-[#8F8F8F]  ">
                    Questions {index + 1} out of 10
                  </div>
                  <div className=" font-overused text-[18px] font-medium text-[#FFFFFF]  ">
                    {item.question}
                  </div>
                </div>
                <div className=" grid grid-cols-2 gap-x-24 gap-y-12 ">
                  {item.options.map((items, index) => (
                    <div
                      className={`  px-[52px] py-[20px] rounded-3xl text-[16px] font-medium font-overused text-[white] ${
                        activeTab1 == index ? "bg-[#8B66FE]" : " bg-[#292929] "
                      } border-[1px] cursor-pointer border-[#333333] flex items-center justify-center  `}
                      onClick={() => {
                        setActiveTab1(index);
                      }}
                    >
                      {items}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className=" pt-24 px-6 ">
              <div className=" w-full flex items-center justify-between h-[40px] py-6 rounded-3xl bg-[#333333] px-4 border-[1px] border-[#444444] ">
                <div className=" flex items-center  gap-2 ">
                  <div className=" font-overused text-white text-[15px] pr-8  ">
                    Progress
                  </div>
                  <div className=" h-[5px] w-[45px] rounded-2xl bg-[#6D6D6D] "></div>
                  <div className=" h-[5px] w-[45px] rounded-2xl bg-[#8B66FE] "></div>
                </div>
                <div className=" flex items-center gap-4  ">
                  <div
                    className=" text-[#FAFBFD] text-[16px] font-overused  h-full px-8 py-2 rounded-full cursor-pointer   "
                    onClick={prevQuestion}
                  >
                    Previous
                  </div>
                  {index1 !== 9 && (
                    <div
                      className=" text-[#FAFBFD] text-[16px] font-overused bg-[#8B66FE] h-full px-8 py-2 rounded-full cursor-pointer   "
                      onClick={changeQuestion}
                    >
                      Next
                    </div>
                  )}
                  {index1 == 9 && (
                    <Link href={"/dashboard/allassessments"}>
                      <div
                        className=" text-[#FAFBFD] text-[16px] font-overused bg-[#8B66FE] h-full px-8 py-2 rounded-full cursor-pointer   "
                        onClick={changeQuestion}
                      >
                        Submit
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
