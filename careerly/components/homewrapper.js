"use client";
import Padding from "@/components/padding";
import Image from "next/image";
import { collection, addDoc, getDoc, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase";
import Hero from "./hero";
import Secondcomp from "./secondcomp";
import Thirdcomp from "./thirdcomp";
import Fourthcomp from "./fourthcomp";
import Fifthcompo from "./fifthcompo";

const Homewrapper = () => {
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
    <div>
      <Hero />
      <div className=" h-[20vh] bg-black "></div>
      <Secondcomp />
      <Thirdcomp />
      <Fourthcomp />
      <Fifthcompo />
    </div>
  );
};

export default Homewrapper;
