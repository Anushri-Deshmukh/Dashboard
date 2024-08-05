import React from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ percentage }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circularProgressBarContainer">
      <svg className="circularProgressBar" width="80" height="80">
        <circle
          className="circularProgressBackground"
          cx="40"
          cy="40"
          r={radius}
          strokeWidth="10"
        />
        <circle
          className="circularProgress"
          cx="40"
          cy="40"
          r={radius}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="percentageText">{percentage}%</div>
      <p style={{marginTop: "30px",
    fontSize: "small"}}>Lorem ipsum neque</p>
    </div>
  );
};

export default CircularProgressBar;
