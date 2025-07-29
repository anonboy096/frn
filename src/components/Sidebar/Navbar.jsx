import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import logoDark from "../../assets/logo.png";
import logoLight from "../../assets/lightlg.svg";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import SearchDrawer from "../SearchDrawer";

function Navbar({ darkMode, setDarkMode }) {
  const navigate=useNavigate()
  const [sidebar, setSidebar] = useState(false);
  const [subnav, setSubNav] = useState(null);
  const[showSearch,setShowSearch]=useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const showSubnav = (title) => {
    setSubNav((prev) => (prev === title ? null : title));
  };

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* Top Navbar */}
      <div className=" bg-white dark:bg-black text-black  cursor-pointer dark:text-white h-[80px] flex items-center shadow-md w-full justify-between px-4">
        {/* Sidebar Toggle Button */}
        <button
          onClick={showSidebar}
          className="text-3xl"
          aria-label="Toggle Sidebar"
        >
          <FaIcons.FaBars className="text-black dark:text-white" />
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-montserrat font-semibold tracking-wide text-black dark:text-white">
           {/* <img
               src={logo}
             alt="Cosmetica Logo"
            className="h-[60px] w-auto"
       /> */}
             <>
  {/* Light Mode Logo */}
  <img
    src={logoLight}
    alt="Cosmetica Logo"
    className="h-[20px] w-auto dark:hidden"
  />

  {/* Dark Mode Logo */}
  <img
    src={logoDark}
    alt="Cosmetica Logo"
    className="h-[50px] w-auto hidden dark:block"
  />
</>


        </div>

        {/* Right Icons */}
        <div className="ml-auto flex items-center space-x-4">
          <button 
          onClick={()=>setShowSearch(true)}
           className="text-xl text-black dark:text-white">
            <FaIcons.FaSearch className="text-black dark:text-white" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="text-2xl text-black dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>
          <button onClick={()=>navigate('/cart')}>
            <FaShoppingCart />

          </button>


         
        </div>
      </div>

      {/* Sidebar */}
      <nav
        className={`bg-white dark:bg-zinc-900 fixed top-0 left-0 w-[350px] h-screen flex flex-col justify-start transition-transform duration-300 z-50 ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="w-full pt-4">
          {/* Close Button */}
          <li className="w-full h-[80px] flex items-center justify-start pl-4">
            <button
              className="text-3xl text-black dark:text-white"
              aria-label="Close Sidebar"
              onClick={showSidebar}
            >
              <AiIcons.AiOutlineClose />
            </button>
          </li>

          {/* Sidebar Items */}
          {SidebarData.map((item, index) => (
            <div key={index}>
              {/* Main Item */}
              <li
                className="flex items-center justify-between px-7 py-3 tracking-wide hover:text-black dark:hover:text-amber-200 transition-all text-black dark:text-white cursor-pointer"
                onClick={() =>
                  item.subMenu ? showSubnav(item.title) : setSidebar(false)
                }
              >
                {item.path ? (
                <Link
                  to={item.path}
                  className="flex items-center space-x-5 text-lg w-full"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
                ):(
                  <div className="flex items-center space-x-5 text-lg w-full">
                       {item.icon}
                   <span>{item.title}</span>
                   </div>
                )}

                {/* Show dropdown arrow if submenu exists */}
                {item.subMenu && (
                  <span className="ml-auto text-sm">
                    {subnav === item.title
                      ? item.iconOpened
                      : item.iconClosed}
                  </span>
                )}
              </li>

              {/* Submenu Items */}
              {subnav === item.title &&
                item.subMenu &&
                item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="pl-14 py-2 text-sm hover:bg-gray-800 text-black dark:text-white"
                    onClick={() => setSidebar(false)}
                  >
                    <Link to={subItem.path}>{subItem.title}</Link>
                  </li>
                ))}
            </div>
          ))}
        </ul>
      </nav>
      <SearchDrawer isOpen={showSearch} 
      onClose={()=>setShowSearch(false)}/>
    </>
  );
}

export default Navbar;
