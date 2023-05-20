import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyCards = ({ toy }) => {
  console.log(toy);
  const{_id, name, img, category } = toy;
  return (
  <div>
    <Tabs>
    <TabList >
      <Tab>
       {category?.map(ct => <p>ct.name</p>)}
      </Tab>
     
    </TabList>
    
    <TabPanel>
      
    </TabPanel>
  </Tabs>
  </div>
  );
};

export default ToyCards;
