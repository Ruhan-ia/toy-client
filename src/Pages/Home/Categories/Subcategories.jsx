import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCards from "./ToyCards";

const Subcategories = () => {
const [active, setActive] = useState('sports')
  const [toys, setToys] = useState([])

  const handleTabClick = (tabName) =>{
    setActive(tabName)
  }

  useEffect(() =>{
    fetch(`https://toy-store-98bee.web.app/alltoys${active}`)
    .then(res => res.json())
    .then(data => setToys(data))

  }, [])


  return (
   <div>
    <div className=" flex">
      <div onClick={() =>handleTabClick("sports")}
      className={`${active == 'sports'? 'bg-red-500 text-white' : ""}`}
      >
        Sports
      </div>
      <div onClick={() =>handleTabClick("classic")}
      className={`${active == 'classic'? 'bg-red-500 text-white' : ""}`}
      >
        Sports
      </div>
      <div onClick={() =>handleTabClick("trucks")}
      className={`${active == 'trucks'? 'bg-red-500 text-white' : ""}`}
      >
        Sports
      </div>

    </div>
   </div>
  );
};

export default Subcategories;
