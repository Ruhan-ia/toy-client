import React from 'react';
import Banner from '../Banner/Banner';
import CarGallery from '../Cargallery/CarGallery';
import Subcategories from '../Categories/Subcategories';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <CarGallery></CarGallery>
           <Subcategories></Subcategories>
        </div>
    );
};

export default Home;