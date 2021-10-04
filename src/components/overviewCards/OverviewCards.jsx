import React from "react";
import "./OverviewCards.scss";

const OverviewCards = (props) => {
    return (
        <div className="dkOverviewCard card">
            <div className="card-body text-white">{props.children}</div>
        </div>
    );
};

export default OverviewCards;
