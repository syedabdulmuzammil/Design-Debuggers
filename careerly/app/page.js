import Padding from "@/components/padding";
import Image from "next/image";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function Home() {
  //add items to data base
  const addItem = async (e) => {
    e.preventDefault();
  };

  const [newItem, setNewItems] = useState({ name: "", price: "" });

  //Read items form data base

  //delete items for database
  return (
    <div className="bg-white h-full w-full relative text-black">
      <Padding>
        <input value={newItem.name} placeholder="Enter Text" onChange={e} />
        <input value={newItem.price} placeholder="Enter Price" />
      </Padding>
    </div>
  );
}
