"use client";
import Padding from "@/components/padding";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy user data (replace with your own)
    const dummyUsers = [
      { username: "user1@gmail.com", password: "password1" },
      { username: "user2@gmail.com", password: "password2" },
      // Add more dummy users as needed
    ];

    // Find user in dummy data
    const user = dummyUsers.find(
      (user) => user.username === username && user.password === password
    );

    // Display login result message
    if (user) {
      setMessage(true);
    } else {
      setMessage(false);
    }
    if (message) {
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    console.log(message, "mes");
  }, [message]);

  return (
    <>
      <div className="font-Matter relative text-[#4E4E4E]  font-medium w-full py-20 min-h-[90svh] md:flex md:items-center pt-24 ">
        <Padding className={"w-full"}>
          <div className=" text-[24px] font-medium text-white text-center pb-8 font-space ">
            Login
          </div>
          <div className="flex w-full flex-col  justify-center items-center">
            <div className="flex justify-start items-start w-[23rem]  text-[#9A9A9A] ">
              Email
            </div>
            <input
              type="text"
              className=" login  bg-[#191919]  w-[22.5rem] h-[3.5rem] px-3 py-3 rounded-xl font-normal text-[#c5c5c5]  mt-2 md:py-2.5 border-[#444444] border-[1px] outline-none  "
              placeholder="Enter your Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className=" pt-6 flex  flex-col w-full justify-center items-center">
            <div className="flex justify-start items-start w-[23rem] text-[#9A9A9A] font-space font-medium ">
              {" "}
              Password{" "}
            </div>
            <input
              type="text"
              className=" login  bg-[#191919] w-[22.5rem] h-[3.5rem] px-3 py-3 rounded-xl font-normal text-[#c5c5c5]  mt-2 md:py-2.5 border-[#444444] border-[1px] outline-none  "
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" w-[23rem] font-space bg-[#6E40FF]  text-[#ffffff] text-[14px] font-medium text-center py-4 md:py-3 mt-8 rounded-full "
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <div className=" flex gap-2 pt-6 w-max mx-auto ">
            <div className=" text-[#B1B1B1] font-space font-medium text-[16px] ">
              Don’t have an account ?
            </div>
            <Link href={"/signup"}>
              <div className=" text-[#6E40FF] font-space font-medium  text-[16px] ">
                Signup
              </div>
            </Link>
          </div>
        </Padding>
      </div>
      {message && <div>{message}</div>}
    </>
  );
};

export default Page;
