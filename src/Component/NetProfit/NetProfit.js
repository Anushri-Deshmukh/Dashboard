import React from 'react';
import './NetProfit.css';
import { FaArrowUp } from 'react-icons/fa';
import CircularProgressBar from './CircularProgressBar/CircularProgressBar';


const NetProfit = () => {
  return (
    <div className="NetProfit">
     <div className="netProfitMainContainer">
      <div className="netProfitContent">
                  <div className="netProfitLeft">
                            <h3 className="netProfitTitle">Net Profit</h3>
          <div className="netProfitAmount">$6759.25</div>
          <div className="netProfitPercentage">
            <FaArrowUp className="arrowIcon" /> 3%
          </div>
        </div>
        <div className="netProfitRight">
          <CircularProgressBar percentage={70} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default NetProfit;
