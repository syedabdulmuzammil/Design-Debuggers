"use client";
import Padding from "@/components/padding";
import Image from "next/image";
import { collection, addDoc, getDoc, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

export default function Home() {
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
    <div className="bg-white h-full w-full relative text-black">
      <Padding>hello</Padding>
    </div>
  );
}
