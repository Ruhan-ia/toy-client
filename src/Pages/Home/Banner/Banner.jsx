import React from "react";
import car1 from '../../../images/banner/car-1.jpg'
import car2 from '../../../images/banner/car-2.jpg'
import car3 from '../../../images/banner/car-3.jpg'
import car4 from '../../../images/banner/car-4.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={car1}
          className="w-full rounded-xl"
        />
        <div className="absolute flex h-full left-0 bottom-0  bg-gradient-to-r from-gray-400 rounded-xl">
            <h2 className="text-white text-6xl font-bold w-1/2 pl-12 pt-10">Race With Your Buddy</h2>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={car2}
          className="w-full rounded-xl"
        />
         <div className="absolute flex h-full left-0 bottom-0  bg-gradient-to-r from-gray-400 rounded-xl">
            <h2 className="text-white text-6xl font-bold w-1/2 pl-12 pt-10">Race With Your Buddy</h2>
        </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={car3}
          className="w-full"
        />
         <div className="absolute flex h-full left-0 bottom-0  bg-gradient-to-r from-gray-400 rounded-xl">
            <h2 className="text-white text-6xl font-bold w-1/2 pl-12 pt-10">Race With Your Buddy</h2>
        </div>
       <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={car4}
          className="w-full rounded-xl"
        />
         <div className="absolute flex h-full left-0 bottom-0  bg-gradient-to-r from-gray-400 rounded-xl">
            <h2 className="text-white text-6xl font-bold w-1/2 pl-12 pt-10">Race With Your Buddy</h2>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
