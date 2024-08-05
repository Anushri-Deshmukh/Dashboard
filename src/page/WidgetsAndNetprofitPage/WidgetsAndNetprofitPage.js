import React from 'react';
import Widgets from '../../Component/Widgets/Widgets';
import NetProfit from '../../Component/NetProfit/NetProfit';
import './WidgetsAndNetprofitPage.css';

const WidgetsAndNetprofitPage = () => {
  return (
    <div className="WN-MainContainer">
        <Widgets />
        <NetProfit />
    </div>
  );
};

export default WidgetsAndNetprofitPage;
