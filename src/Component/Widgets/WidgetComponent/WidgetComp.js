import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './Widgetcomp.css';

const Widget = ({avatar, title, value, change, isPositive,  }) => {
  return (
    <div className="widgetCard">
          <div className="widgetContent">
            <div className="widget-icon"> {avatar}</div>
            
              <div className="widgetTitle">{title}</div>
              <div className="widgetLastContent">
                   <div className="widgetValue">{value}</div>
        <div className={`widgetChange ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <FaArrowUp /> : <FaArrowDown />} {change}
        </div>
              </div>
       
      </div>
    </div>
  );
};

export default Widget;
