import React from 'react';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';
import { MdOutlineMailOutline, MdWindow } from 'react-icons/md';
import './Header.css';
import Image from "../../Asset/Image.png";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="WindowIconContainer">
        <MdWindow color="#00aaff" className="window-icon"/>
      </div>
      <div className="SearchContainer">
        <FaSearch />
        <input className="SearchInput" type="text" placeholder="Search..." />
      </div>
      <div className="IconContainer">
        <MdOutlineMailOutline className="header-icon" />
        <FaCog className="header-icon" />
        <FaBell className="header-icon" />
        <img src={Image} alt="user icon" className="header-card-avatar" />
      </div>
    </div>
  );
};

export default Header;
