import React from 'react';
import './RecentOrderAndFeedbackPage.css';
import RecentOrders from '../../Component/RecentOrders/RecentOrders';
import Feedback from '../../Component/Feedback/Feedback';

const RecentOrderAndFeedbackPage = () => {
  return (
    <div className="MainContainer-recent">
      <div className="CardContainer">
        <RecentOrders />
        <Feedback />
      </div>
    </div>
  );
};

export default RecentOrderAndFeedbackPage;
