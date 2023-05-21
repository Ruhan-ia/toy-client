import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyCards = ({ toy }) => {
  console.log(toy);
  const { _id, name, img, subCategory, price, ratings } = toy;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={img} />
        </div>
      </div>{" "}
      <div className="card-body">
        <h1>{name}</h1>
        <h2 className="card-title">{subCategory}</h2>
        <p>{price}</p>
        <p>{ratings}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCards;
