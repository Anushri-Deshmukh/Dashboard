import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import WidgetsAndNetprofitPage from '../../page/WidgetsAndNetprofitPage/WidgetsAndNetprofitPage';
import ActivityAndGoalsPage from '../../page/ActivityAndGoalsPage/ActivityAndGoalsPage';
import RecentOrderAndFeedbackPage from '../../page/RecentOrderAndFeedbackPage/RecentOrderAndFeedbackPage';

const Dashboard = () => {
  return (
    <div className="DashboardContainer">
      <Sidebar />
      <div className="MainContent">
        <Header />
        <div className="Content">
          <h1 style={{marginLeft: "25px"}}>Dashboard</h1>
          <WidgetsAndNetprofitPage />
          <ActivityAndGoalsPage/>
          <RecentOrderAndFeedbackPage/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
