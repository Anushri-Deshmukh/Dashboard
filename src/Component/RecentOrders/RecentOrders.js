import React from 'react';
import './RecentOrder.css';


const recentOrders = [
  { customer: 'Wade Warren', orderNo: '1547856', amount: '$134.00', status: 'Completed' },
  { customer: 'Jane Cooper', orderNo: '4853769', amount: '$85.00', status: 'Pending' },
  { customer: 'Guy Hawkins', orderNo: '7085825', amount: '$41.00', status: 'Completed' },
  { customer: 'Kristin Watson', orderNo: '2085672', amount: '$68.00', status: 'Canceled' },
  { customer: 'Cody Fisher', orderNo: '5671840', amount: '$64.00', status: 'Pending' },
  { customer: 'Savannah Nguyen', orderNo: '7816458', amount: '$95.00', status: 'Completed' },

];

const RecentOrders = () => {
  return (
    <div className="RecentOrders">
      <div className="recent-orders-card">
              <h3 className="recent-orders-title">Recent Orders</h3>
              <div class="recent-orders-table-wrapper">
                  
                   <table className="recent-orders-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.customer}</td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
               </div>
     
    </div>
    </div>
  );
};


export default RecentOrders;
