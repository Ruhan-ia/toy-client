import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './CarGallery.css';

import car1 from '../../../images/banner/car-1.jpg'
import car2 from '../../../images/banner/car-2.jpg'
import car3 from '../../../images/banner/car-3.jpg'
import car4 from '../../../images/banner/car-4.jpg'
import car5 from '../../../images/banner/car-5.jpg'
import car6 from '../../../images/banner/car-6.jpg'
import car7 from '../../../images/banner/car-7.jpg'
import car8 from '../../../images/banner/car-8.jpg'
import car9 from '../../../images/banner/car-9.jpg'
import car10 from '../../../images/banner/car-10.jpg'
import car11 from '../../../images/banner/car-11.jpg'
import car12 from '../../../images/banner/car-12.jpg'


const CarGallery = () => {
    
        const cars = [
            { id: 1, name: 'Lightning McQueen', image: `${car1}` },
            { id: 2, name: 'Mater', image: `${car2}` },
            { id: 3, name: 'Sally Carrera', image: `${car3}` },
            { id: 4, name: 'Doc Hudson', image: `${car4}` },
            { id: 5, name: 'Lightning McQueen', image: `${car5}` },
            { id: 6, name: 'Mater', image: `${car6}` },
            { id: 7, name: 'Sally Carrera', image: `${car7}` },
            { id: 8, name: 'Doc Hudson', image: `${car8}` },
            { id: 9, name: 'Lightning McQueen', image: `${car9}` },
            { id: 10, name: 'Mater', image: `${car10}` },
            { id: 11, name: 'Sally Carrera', image: `${car11}` },
            { id: 12, name: 'Doc Hudson', image: `${car12}` },
          
           
          ];
        
          return (
            <div className="car-gallery mt-10">
                <h1 className='font-bold text-6xl text-center text-green-600 p-20'>Ours Gallery</h1> <hr />
            <TransitionGroup className=' grid lg:grid-cols-4 justify-center '>
              {cars.map(car => (
                <CSSTransition key={car.id} classNames="fade" timeout={300}>
                 
                 <div className="avatar">
                    <div className="w-auto rounded">
                    <img src={car.image} alt={car.name} className="car-image w-[50%]" />
                    </div>
                    </div>

                    
                  
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
          );
    
};

export default CarGallery;