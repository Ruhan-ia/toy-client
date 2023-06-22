import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const[myToy, setToy] = useState([])
    useEffect(()=>{
        fetch(`https://toy-store-server-liart.vercel.app/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => setToy(data) )
    },[user])
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Subcategory</th>
              <th>price </th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
          {

           
           
            myToy.map(toys => (<>  <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={toys.img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br/>
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>{toys.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr></>))
          }
           
           
          </tbody>
         
          
        </table>
      </div>
    );
};

export default MyToys;