import React from 'react';
import Widget from './WidgetComponent/WidgetComp';
import './Widgets.css';
import { GiCancel } from "react-icons/gi";
import { MdLockPerson } from "react-icons/md";


const data = [
    {title:"Total Orders", value:"75", change:"3%", isPositive:true,avatar: <MdLockPerson className="section-icon"/>},
    {title:"Total Delivered", value:"70", change:"2%", isPositive:true,avatar: <MdLockPerson className="section-icon"/>},
    {title:"Total Cancelled", value:"5", change:"1%", isPositive:false,avatar: <MdLockPerson className="section-icon"/>},
    {title:"Total Revenue", value:"$12k", change:"4%", isPositive:true,avatar: <GiCancel className="section-icon"/>},
]


const Widgets = () => {
    return (
        <div className="Widgets">
            <div className="widgetsContainer">
                {data?.map((item) => (
          <Widget avatar={item?.avatar} title={item?.title} value={item?.value} change={item?.change} isPositive={item?.isPositive} />

))}      
    </div>
      </div>
    
  );
};

export default Widgets;
