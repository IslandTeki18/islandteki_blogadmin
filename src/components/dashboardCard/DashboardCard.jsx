import React from "react";
import "./DashboardCard.scss";

const DashboardCard = (props) => {
    return (
        <div className="dkDashboardCard">
            <h4>{props.title}</h4>
            {props.children}
        </div>
    );
};

export default DashboardCard;
