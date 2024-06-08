"use client";
import React from "react";
import Padding from "@/components/padding";
import Image from "next/image";
import { collection, addDoc, getDoc, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase";

const Page = () => {
  const [newItem, setNewItems] = useState({
    name: "",
    price: "",
  });
  const [items, setItems] = useState([]);
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.price !== "") {
      setItems([...items, newItem]);
      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        price: newItem.price.trim(),
      });
      setNewItems({ name: "", price: "" });
    }
  };
  return (
    <div>
      <input
        value={newItem.name}
        placeholder="enter text"
        onChange={(e) => {
          setNewItems({ ...newItem, name: e.target.value });
        }}
      />
      <input
        value={newItem.price}
        placeholder="enter number"
        onChange={(e) => {
          setNewItems({ ...newItem, price: e.target.value });
        }}
      />
      <button type="submit" onClick={addItem}>
        click
      </button>
      <div className=" flex flex-col ">
        {items?.map((item) => (
          <div className=" flex gap-2 ">
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
