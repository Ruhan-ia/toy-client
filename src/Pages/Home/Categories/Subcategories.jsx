import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCards from "./ToyCards";

const Subcategories = () => {

  const [toys, setToys] = useState([])

  useEffect(() =>{
    fetch('http://localhost:5000/alltoys')
    .then(res => res.json())
    .then(data => setToys(data))

  }, [])


  return (
    <div className="mt-20  ">
    <h1 className="font-bold text-5xl text-center p-8">Actions Car</h1>
    <div  className='grid grid-cols-3 justify-items-center'>

   
   
    {
      toys.map(toy => <ToyCards key={toy._id} toy={toy}></ToyCards>)



      
    }
    
    
    </div>
    
    </div>
  );
};

export default Subcategories;
