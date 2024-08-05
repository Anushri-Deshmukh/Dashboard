import React from 'react';
import { FaHome, FaList, FaCog } from 'react-icons/fa';
import './Sidebar.css';
import { IoMdLock } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";


const Sidebar = () => (
  <div className="SidebarContainer">
    <div className="MenuItem"><FaHome color="#00aaff"/> </div>
    <div className="MenuItem"><FaList /> </div>
    <div className="MenuItem"><FaCog /> </div>
    <div className="MenuItem"><IoMdLock /> </div>
    <div className="MenuItem-logout"><RiLogoutCircleRLine /> </div>

  </div>
);

export default Sidebar;
