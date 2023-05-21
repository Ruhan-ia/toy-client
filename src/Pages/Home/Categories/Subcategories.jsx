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

  }, [active])


  return (
   <div>
    <div className=" flex text-center justify-center gap-5">
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
      {
        toys.map(toy => <ToyCards key={toy._id} toy={toy}></ToyCards>)
      }
    </div>
   </div>
  );
};

export default Subcategories;
