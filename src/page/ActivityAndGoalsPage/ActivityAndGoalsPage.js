import React from 'react';
import './ActivityAndGoalsPage.css';
import ActivityChart from '../../Component/ActivityChart/ActivityChart';
import MenuCards from '../../Component/MenuCards/MenuCards';

const ActivityAndGoalsPage = () => {
  return (
    <div className="MainContainer">
      <div className="CardContainer">
        <ActivityChart />
        <MenuCards />
      </div>
    </div>
  );
};

export default ActivityAndGoalsPage;
