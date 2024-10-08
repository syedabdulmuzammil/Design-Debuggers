"use client";
import Padding from "@/components/padding";
import Image from "next/image";
import { collection, addDoc, getDoc, QuerySnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "@/app/firebase";
import Hero from "./hero";
import Secondcomp from "./secondcomp";
import Thirdcomp from "./thirdcomp";
import Fourthcomp from "./fourthcomp";
import Fifthcompo from "./fifthcompo";
import Sixcomp from "./sixcomp";
import Faqs from "./faqs";
import Personal from "./personal";
import Info from "./info";
import Assesments from "./assesments";
import Navbar from "./navbar";

const Homewrapper = () => {
  const ref1 = useRef();
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.price !== "") {
      // setItems([...items, newItem]);
      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        price: newItem.price.trim(),
      });
      setNewItems({ name: "", price: "" });
    }
  };
  return (
    <div className=" pt-12 ">
      <Navbar ref1={ref1} />
      <Hero />
      <div className=" h-[20vh] bg-black "></div>
      <Secondcomp />
      <Thirdcomp />
      <Fourthcomp />
      <div ref={ref1}>
        <Fifthcompo />
      </div>
      <Sixcomp />
    </div>
  );
};

export default Homewrapper;
