import React from 'react';
import './MenuCards.css';
import { FaArrowRight } from 'react-icons/fa';
import { BiDish } from "react-icons/bi";
import { GoGoal } from "react-icons/go";



const sections = [
  { title: 'Goals', avatar: <GoGoal className="section-icon"/> },
  { title: 'Popular Dishes', avatar: <BiDish className="section-icon"/>  },
  { title: 'Menus', avatar: <BiDish className="section-icon"/> },
];

const MenuCards = () => {
  return (
    <div className="MenuCards">
      <div className="goals-card">
        {sections.map((section, index) => (
          <div key={index} className="section">
                <div className="section-header">
                    <div className='menucard-avatar'>{section?.avatar}</div>

              <div className="section-title">
                <span>{section.title}</span>
              </div>
              <FaArrowRight className="section-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCards;
