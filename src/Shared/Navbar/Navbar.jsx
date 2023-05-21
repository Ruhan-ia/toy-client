import React, { useContext } from "react";
import logo1 from "../../images/logo/logo.jpg";
import profile from "../../images/banner/profile.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOUt = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>All Toys</Link>
              </li>
              {user && (
                <>
                  <li>
                    <Link to='/myToys'>My Toys</Link>
                  </li>
                  <li>
                    <Link to="/addtoy">Add a Toy</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-[50px] rounded-md" src={logo1} alt="" />
            <h2 className="font-bold text-4xl text-emerald-600 p-3">
              Action Cars
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>All Toys</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link  to='/myToys'>My Toys</Link>
                </li>
                <li>
                  <Link to="/addtoy">Add a Toy</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar">
                <div className="w-14 rounded-full me-5 hover:{user?.name}">
                  <img className="hover:{user?.displayName}" src={user?.photoURL} />
                </div>
              </div>
              <button onClick={handleLogOUt} className="btn btn-primary">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
