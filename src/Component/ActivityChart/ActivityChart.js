import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import './ActivityChart.css';
import { FaChevronDown } from 'react-icons/fa';


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
      {
        label: 'Activity',
        data: [10, 12, 8, 14, 13, 10, 15, 12, 13, 14, 18, 20, 21, 25, 24, 23, 22, 20, 18, 19, 15, 16, 14, 15, 13, 12, 10, 8, 10, 9],
        backgroundColor: '#00aaff',
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#fff',
        },
      },
      y: {
        grid: {
          color: '#3a3a3a',
        },
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="ActivityChart">
    <div className="activity-chart-card">
      <div className="activity-chart-header">
        <h3 className="activity-chart-title">Activity</h3>
        <FaChevronDown className="dropdown-icon" />
      </div>
      <Bar data={data} options={options} />
      </div>
      </div>
  );
};

export default ActivityChart;
